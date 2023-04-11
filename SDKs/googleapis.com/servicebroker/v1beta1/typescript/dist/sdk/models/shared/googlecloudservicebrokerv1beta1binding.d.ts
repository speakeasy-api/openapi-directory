import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the binding.
 */
export declare class GoogleCloudServicebrokerV1beta1Binding extends SpeakeasyBase {
    /**
     * A JSON object that contains data for platform resources associated with
     *
     * @remarks
     * the binding to be created.
     */
    bindResource?: Record<string, any>;
    /**
     * The id of the binding. Must be unique within GCP project.
     *
     * @remarks
     * Maximum length is 64, GUID recommended.
     * Required.
     */
    bindingId?: string;
    /**
     * Output only. Timestamp for when the binding was created.
     */
    createTime?: string;
    /**
     * Output only. String containing the Deployment Manager deployment name that was created
     *
     * @remarks
     * for this binding,
     */
    deploymentName?: string;
    /**
     * Configuration options for the service binding.
     */
    parameters?: Record<string, any>;
    /**
     * The ID of the plan. See `Service` and `Plan` resources for details.
     *
     * @remarks
     * Maximum length is 64, GUID recommended.
     * Required.
     */
    planId?: string;
    /**
     * Output only. The resource name of the binding, e.g.
     *
     * @remarks
     * projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.
     */
    resourceName?: string;
    /**
     * The id of the service. Must be a valid identifier of a service
     *
     * @remarks
     * contained in the list from a `ListServices()` call.
     * Maximum length is 64, GUID recommended.
     * Required.
     */
    serviceId?: string;
}
