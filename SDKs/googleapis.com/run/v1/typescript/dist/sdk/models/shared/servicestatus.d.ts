import { SpeakeasyBase } from "../../../internal/utils";
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTarget, TrafficTargetInput } from "./traffictarget";
/**
 * The current state of the Service. Output only.
 */
export declare class ServiceStatusInput extends SpeakeasyBase {
    /**
     * Information for connecting over HTTP(s).
     */
    address?: Addressable;
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the `spec` inline with the observed state of the world. Service-specific conditions include: * `ConfigurationsReady`: `True` when the underlying Configuration is ready. * `RoutesReady`: `True` when the underlying Route is ready. * `Ready`: `True` when all underlying resources are ready.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * Name of the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string;
    /**
     * Name of the latest Revision from this Service's Configuration that has had its `Ready` condition become `True`.
     */
    latestReadyRevisionName?: string;
    /**
     * Returns the generation last fully processed by the system. This will only match metadata.generation when reconciliation is complete. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number;
    /**
     * Holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: TrafficTargetInput[];
    /**
     * URL that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
     */
    url?: string;
}
/**
 * The current state of the Service. Output only.
 */
export declare class ServiceStatus extends SpeakeasyBase {
    /**
     * Information for connecting over HTTP(s).
     */
    address?: Addressable;
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the `spec` inline with the observed state of the world. Service-specific conditions include: * `ConfigurationsReady`: `True` when the underlying Configuration is ready. * `RoutesReady`: `True` when the underlying Route is ready. * `Ready`: `True` when all underlying resources are ready.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * Name of the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string;
    /**
     * Name of the latest Revision from this Service's Configuration that has had its `Ready` condition become `True`.
     */
    latestReadyRevisionName?: string;
    /**
     * Returns the generation last fully processed by the system. This will only match metadata.generation when reconciliation is complete. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number;
    /**
     * Holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: TrafficTarget[];
    /**
     * URL that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
     */
    url?: string;
}
