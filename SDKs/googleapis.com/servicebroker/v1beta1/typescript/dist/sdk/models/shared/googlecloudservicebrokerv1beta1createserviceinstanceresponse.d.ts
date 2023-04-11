import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `CreateServiceInstance()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse extends SpeakeasyBase {
    /**
     * Used to communicate description of the response. Usually for non-standard
     *
     * @remarks
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * If broker executes operation asynchronously, this is the operation ID that
     *
     * @remarks
     * can be polled to check the completion status of said operation.
     * This broker always will return a non-empty operation on success.
     */
    operation?: string;
}
