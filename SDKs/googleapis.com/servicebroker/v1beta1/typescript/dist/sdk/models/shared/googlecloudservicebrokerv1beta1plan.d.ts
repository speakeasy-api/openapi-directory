import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Plan message describes a Service Plan.
 */
export declare class GoogleCloudServicebrokerV1beta1Plan extends SpeakeasyBase {
    /**
     * Specifies whether instances of the service can be bound to applications.
     *
     * @remarks
     * If not specified, `Service.bindable` will be presumed.
     */
    bindable?: boolean;
    /**
     * Textual description of the plan. Optional.
     */
    description?: string;
    /**
     * Whether the service is free.
     */
    free?: boolean;
    /**
     * ID is a globally unique identifier used to uniquely identify the plan.
     *
     * @remarks
     * User must make no presumption about the format of this field.
     */
    id?: string;
    /**
     * A list of metadata for a service offering.
     *
     * @remarks
     * Metadata is an arbitrary JSON object.
     */
    metadata?: Record<string, any>;
    /**
     * User friendly name of the plan.
     *
     * @remarks
     * The name must be globally unique within GCP project.
     * Note, which is different from ("This must be globally unique within a
     * platform marketplace").
     */
    name?: string;
    /**
     * Schema definitions for service instances and bindings for the plan.
     */
    schemas?: Record<string, any>;
}
