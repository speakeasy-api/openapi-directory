import { SpeakeasyBase } from "../../../internal/utils";
import { ManifestRequestStatusEnum } from "./manifestrequeststatusenum";
/**
 * A reference to the manifest request
 */
export declare class ManifestRequest extends SpeakeasyBase {
    /**
     * A string that uniquely identifies a manifest request
     */
    manifestRequestId?: string;
    status?: ManifestRequestStatusEnum;
}
