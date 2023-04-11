import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current blue-green upgrade phase.
 */
export declare enum BlueGreenInfoPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED",
    UpdateStarted = "UPDATE_STARTED",
    CreatingGreenPool = "CREATING_GREEN_POOL",
    CordoningBluePool = "CORDONING_BLUE_POOL",
    DrainingBluePool = "DRAINING_BLUE_POOL",
    NodePoolSoaking = "NODE_POOL_SOAKING",
    DeletingBluePool = "DELETING_BLUE_POOL",
    RollbackStarted = "ROLLBACK_STARTED"
}
/**
 * Information relevant to blue-green upgrade.
 */
export declare class BlueGreenInfo extends SpeakeasyBase {
    /**
     * The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool.
     */
    blueInstanceGroupUrls?: string[];
    /**
     * Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    bluePoolDeletionStartTime?: string;
    /**
     * The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool.
     */
    greenInstanceGroupUrls?: string[];
    /**
     * Version of green pool.
     */
    greenPoolVersion?: string;
    /**
     * Current blue-green upgrade phase.
     */
    phase?: BlueGreenInfoPhaseEnum;
}
