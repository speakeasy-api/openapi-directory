import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `UpdateServiceInstance()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse extends SpeakeasyBase {
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
     */
    operation?: string;
}
