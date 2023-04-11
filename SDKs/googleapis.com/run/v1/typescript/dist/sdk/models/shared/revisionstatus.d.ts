import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * RevisionStatus communicates the observed state of the Revision (from the controller).
 */
export declare class RevisionStatus extends SpeakeasyBase {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions. Revision-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `ContainerHealthy`: `True` when the Revision readiness check completes. * `Active`: `True` when the Revision may receive traffic.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string;
    /**
     * Optional. Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config.
     */
    logUrl?: string;
    /**
     * ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    observedGeneration?: number;
    /**
     * Not currently used by Cloud Run.
     */
    serviceName?: string;
}
