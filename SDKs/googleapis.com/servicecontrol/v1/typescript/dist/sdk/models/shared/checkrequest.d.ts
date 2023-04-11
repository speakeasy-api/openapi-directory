import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Request message for the Check method.
 */
export declare class CheckRequest extends SpeakeasyBase {
    /**
     * Represents information regarding an operation.
     */
    operation?: Operation;
    /**
     * Requests the project settings to be returned as part of the check response.
     */
    requestProjectSettings?: boolean;
    /**
     * Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string;
    /**
     * Indicates if service activation check should be skipped for this request. Default behavior is to perform the check and apply relevant quota. WARNING: Setting this flag to "true" will disable quota enforcement.
     */
    skipActivationCheck?: boolean;
}
