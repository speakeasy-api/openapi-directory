import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `GetBinding()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1GetBindingResponse extends SpeakeasyBase {
    /**
     * Credentials to use the binding.
     */
    credentials?: Record<string, any>;
    /**
     * String containing the Deployment Manager deployment name that was created
     *
     * @remarks
     * for this binding,
     */
    deploymentName?: string;
    /**
     * Used to communicate description of the response. Usually for non-standard
     *
     * @remarks
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * Output only. The resource name of the binding, e.g.
     *
     * @remarks
     * projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.
     */
    resourceName?: string;
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
     * An array of configurations for mounting volumes.
     */
    volumeMounts?: Record<string, any>[];
}
