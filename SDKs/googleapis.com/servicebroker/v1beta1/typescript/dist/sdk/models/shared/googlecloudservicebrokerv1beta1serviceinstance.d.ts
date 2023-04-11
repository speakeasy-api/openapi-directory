import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message describing inputs to Provision and Update Service instance requests.
 */
export declare class GoogleCloudServicebrokerV1beta1ServiceInstance extends SpeakeasyBase {
    /**
     * Platform specific contextual information under which the service instance
     *
     * @remarks
     * is to be provisioned. This replaces organization_guid and space_guid.
     * But can also contain anything.
     * Currently only used for logging context information.
     */
    context?: Record<string, any>;
    /**
     * Output only. Timestamp for when the instance was created.
     */
    createTime?: string;
    /**
     * Output only. String containing the Deployment Manager deployment name that was created
     *
     * @remarks
     * for this instance,
     */
    deploymentName?: string;
    /**
     * To return errors when GetInstance call is done via HTTP to be unified with
     *
     * @remarks
     * other methods.
     */
    description?: string;
    /**
     * The id of the service instance. Must be unique within GCP project.
     *
     * @remarks
     * Maximum length is 64, GUID recommended.
     * Required.
     */
    instanceId?: string;
    /**
     * The platform GUID for the organization under which the service is to be
     *
     * @remarks
     * provisioned.
     * Required.
     */
    organizationGuid?: string;
    /**
     * Configuration options for the service instance.
     *
     * @remarks
     * Parameters is JSON object serialized to string.
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
     * Used only in UpdateServiceInstance request to optionally specify previous
     *
     * @remarks
     * fields.
     */
    previousValues?: Record<string, any>;
    /**
     * Output only. The resource name of the instance, e.g.
     *
     * @remarks
     * projects/project_id/brokers/broker_id/service_instances/instance_id
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
    /**
     * The identifier for the project space within the platform organization.
     *
     * @remarks
     * Required.
     */
    spaceGuid?: string;
}
