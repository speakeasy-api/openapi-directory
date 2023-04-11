import { SpeakeasyBase } from "../../../internal/utils";
import { ConcurrentAccessRestriction } from "./concurrentaccessrestriction";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
/**
 * Successful response
 */
export declare class RequestAccessData extends SpeakeasyBase {
    concurrentAccess?: ConcurrentAccessRestriction;
    downloadAccess?: DownloadAccessRestriction;
    /**
     * Resource type.
     */
    kind?: string;
}
