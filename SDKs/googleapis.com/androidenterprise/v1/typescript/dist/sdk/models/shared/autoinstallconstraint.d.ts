import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Charging state constraint.
 */
export declare enum AutoInstallConstraintChargingStateConstraintEnum {
    ChargingStateConstraintUnspecified = "chargingStateConstraintUnspecified",
    ChargingNotRequired = "chargingNotRequired",
    ChargingRequired = "chargingRequired"
}
/**
 * Device idle state constraint.
 */
export declare enum AutoInstallConstraintDeviceIdleStateConstraintEnum {
    DeviceIdleStateConstraintUnspecified = "deviceIdleStateConstraintUnspecified",
    DeviceIdleNotRequired = "deviceIdleNotRequired",
    DeviceIdleRequired = "deviceIdleRequired"
}
/**
 * Network type constraint.
 */
export declare enum AutoInstallConstraintNetworkTypeConstraintEnum {
    NetworkTypeConstraintUnspecified = "networkTypeConstraintUnspecified",
    AnyNetwork = "anyNetwork",
    UnmeteredNetwork = "unmeteredNetwork"
}
/**
 * The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.
 */
export declare class AutoInstallConstraint extends SpeakeasyBase {
    /**
     * Charging state constraint.
     */
    chargingStateConstraint?: AutoInstallConstraintChargingStateConstraintEnum;
    /**
     * Device idle state constraint.
     */
    deviceIdleStateConstraint?: AutoInstallConstraintDeviceIdleStateConstraintEnum;
    /**
     * Network type constraint.
     */
    networkTypeConstraint?: AutoInstallConstraintNetworkTypeConstraintEnum;
}
