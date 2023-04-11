import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `CreateBinding()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1CreateBindingResponse extends SpeakeasyBase {
    /**
     * Credentials to use the binding.
     */
    credentials?: Record<string, any>;
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
     * This broker always executes all create/delete operations asynchronously.
     */
    operation?: string;
    /**
     * A URL to which the platform may proxy requests for the address sent with
     *
     * @remarks
     * bind_resource.route
     */
    routeServiceUrl?: string;
    /**
     * From where to read system logs.
     */
    syslogDrainUrl?: string;
    /**
     * An array of configuration for mounting volumes.
     */
    volumeMounts?: Record<string, any>[];
}
