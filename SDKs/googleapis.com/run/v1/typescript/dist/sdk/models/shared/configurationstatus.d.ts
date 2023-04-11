import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
 */
export declare class ConfigurationStatus extends SpeakeasyBase {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, so for the latest ready revision, use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string;
    /**
     * LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True".
     */
    latestReadyRevisionName?: string;
    /**
     * ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    observedGeneration?: number;
}
