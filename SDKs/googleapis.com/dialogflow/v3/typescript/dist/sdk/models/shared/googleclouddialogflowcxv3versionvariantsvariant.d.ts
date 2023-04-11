import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single flow version with specified traffic allocation.
 */
export declare class GoogleCloudDialogflowCxV3VersionVariantsVariant extends SpeakeasyBase {
    /**
     * Whether the variant is for the control group.
     */
    isControlGroup?: boolean;
    /**
     * Percentage of the traffic which should be routed to this version of flow. Traffic allocation for a single flow must sum up to 1.0.
     */
    trafficAllocation?: number;
    /**
     * The name of the flow version. Format: `projects//locations//agents//flows//versions/`.
     */
    version?: string;
}
