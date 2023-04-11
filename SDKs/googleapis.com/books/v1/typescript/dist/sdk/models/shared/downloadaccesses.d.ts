import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
/**
 * Successful response
 */
export declare class DownloadAccesses extends SpeakeasyBase {
    /**
     * A list of download access responses.
     */
    downloadAccessList?: DownloadAccessRestriction[];
    /**
     * Resource type.
     */
    kind?: string;
}
