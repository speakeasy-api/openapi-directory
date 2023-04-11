import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionPolicyZoneConfiguration } from "./distributionpolicyzoneconfiguration";
/**
 * The distribution shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).
 */
export declare enum DistributionPolicyTargetShapeEnum {
    Any = "ANY",
    AnySingleZone = "ANY_SINGLE_ZONE",
    Balanced = "BALANCED",
    Even = "EVEN"
}
export declare class DistributionPolicy extends SpeakeasyBase {
    /**
     * The distribution shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).
     */
    targetShape?: DistributionPolicyTargetShapeEnum;
    /**
     * Zones where the regional managed instance group will create and manage its instances.
     */
    zones?: DistributionPolicyZoneConfiguration[];
}
