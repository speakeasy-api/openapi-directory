import { SpeakeasyBase } from "../../../internal/utils";
import { CheckError } from "./checkerror";
import { CheckInfo } from "./checkinfo";
import { QuotaInfo } from "./quotainfo";
/**
 * Response message for the Check method.
 */
export declare class CheckResponse extends SpeakeasyBase {
    /**
     * Indicate the decision of the check. If no check errors are present, the service should process the operation. Otherwise the service should use the list of errors to determine the appropriate action.
     */
    checkErrors?: CheckError[];
    /**
     * Contains additional information about the check operation.
     */
    checkInfo?: CheckInfo;
    /**
     * The same operation_id value used in the CheckRequest. Used for logging and diagnostics purposes.
     */
    operationId?: string;
    /**
     * Contains the quota information for a quota check response.
     */
    quotaInfo?: QuotaInfo;
    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string;
    /**
     * The current service rollout id used to process the request.
     */
    serviceRolloutId?: string;
}
