import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1DashboardClient } from "./googlecloudservicebrokerv1beta1dashboardclient";
import { GoogleCloudServicebrokerV1beta1Plan } from "./googlecloudservicebrokerv1beta1plan";
/**
 * The resource model mostly follows the Open Service Broker API, as
 *
 * @remarks
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
 */
export declare class GoogleCloudServicebrokerV1beta1Service extends SpeakeasyBase {
    /**
     * Specifies whether instances of the service can be bound to applications.
     *
     * @remarks
     * Required.
     */
    bindable?: boolean;
    /**
     * Whether the service provides an endpoint to get service bindings.
     */
    bindingRetrievable?: boolean;
    /**
     * Whether the service provides an endpoint to get service bindings.
     */
    bindingsRetrievable?: boolean;
    /**
     * Message containing information required to activate Dashboard SSO feature.
     */
    dashboardClient?: GoogleCloudServicebrokerV1beta1DashboardClient;
    /**
     * Textual description of the service. Required.
     */
    description?: string;
    /**
     * ID is a globally unique identifier used to uniquely identify the service.
     *
     * @remarks
     * ID is an opaque string.
     */
    id?: string;
    /**
     * Whether the service provides an endpoint to get service instances.
     */
    instancesRetrievable?: boolean;
    /**
     * A list of metadata for a service offering.
     *
     * @remarks
     * Metadata is an arbitrary JSON object.
     */
    metadata?: Record<string, any>;
    /**
     * User friendly service name.
     *
     * @remarks
     * Name must match [a-z0-9]+ regexp.
     * The name must be globally unique within GCP project.
     * Note, which is different from ("This must be globally unique within a
     * platform marketplace").
     * Required.
     */
    name?: string;
    /**
     * Whether the service supports upgrade/downgrade for some plans.
     */
    planUpdateable?: boolean;
    /**
     * A list of plans for this service.
     *
     * @remarks
     * At least one plan is required.
     */
    plans?: GoogleCloudServicebrokerV1beta1Plan[];
    /**
     * Tags provide a flexible mechanism to expose a classification, attribute, or
     *
     * @remarks
     * base technology of a service.
     */
    tags?: string[];
}
