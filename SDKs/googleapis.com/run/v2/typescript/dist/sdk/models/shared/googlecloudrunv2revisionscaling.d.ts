import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for revision-level scaling settings.
 */
export declare class GoogleCloudRunV2RevisionScaling extends SpeakeasyBase {
    /**
     * Maximum number of serving instances that this resource should have.
     */
    maxInstanceCount?: number;
    /**
     * Minimum number of serving instances that this resource should have.
     */
    minInstanceCount?: number;
}
