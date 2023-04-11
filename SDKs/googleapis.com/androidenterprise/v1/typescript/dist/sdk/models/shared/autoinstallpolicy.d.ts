import { SpeakeasyBase } from "../../../internal/utils";
import { AutoInstallConstraint } from "./autoinstallconstraint";
/**
 * The auto-install mode. If unset defaults to "doNotAutoInstall".
 */
export declare enum AutoInstallPolicyAutoInstallModeEnum {
    AutoInstallModeUnspecified = "autoInstallModeUnspecified",
    DoNotAutoInstall = "doNotAutoInstall",
    AutoInstallOnce = "autoInstallOnce",
    ForceAutoInstall = "forceAutoInstall"
}
export declare class AutoInstallPolicy extends SpeakeasyBase {
    /**
     * The constraints for auto-installing the app. You can specify a maximum of one constraint.
     */
    autoInstallConstraint?: AutoInstallConstraint[];
    /**
     * The auto-install mode. If unset defaults to "doNotAutoInstall".
     */
    autoInstallMode?: AutoInstallPolicyAutoInstallModeEnum;
    /**
     * The priority of the install, as an unsigned integer. A lower number means higher priority.
     */
    autoInstallPriority?: number;
    /**
     * The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device.
     */
    minimumVersionCode?: number;
}
