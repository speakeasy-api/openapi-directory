import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOperation } from "./quotaoperation";
/**
 * Request message for the AllocateQuota method.
 */
export declare class AllocateQuotaRequest extends SpeakeasyBase {
    /**
     * Represents information regarding a quota operation.
     */
    allocateOperation?: QuotaOperation;
    /**
     * Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string;
}
