import { SpeakeasyBase } from "../../../internal/utils";
import { AptSettings } from "./aptsettings";
import { ExecStep } from "./execstep";
import { WindowsUpdateSettings } from "./windowsupdatesettings";
import { YumSettings } from "./yumsettings";
import { ZypperSettings } from "./zyppersettings";
/**
 * Post-patch reboot settings.
 */
export declare enum PatchConfigRebootConfigEnum {
    RebootConfigUnspecified = "REBOOT_CONFIG_UNSPECIFIED",
    Default = "DEFAULT",
    Always = "ALWAYS",
    Never = "NEVER"
}
/**
 * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
 */
export declare class PatchConfig extends SpeakeasyBase {
    /**
     * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
     */
    apt?: AptSettings;
    /**
     * Googet patching is performed by running `googet update`.
     */
    goo?: Record<string, any>;
    /**
     * Allows the patch job to run on Managed instance groups (MIGs).
     */
    migInstancesAllowed?: boolean;
    /**
     * A step that runs an executable for a PatchJob.
     */
    postStep?: ExecStep;
    /**
     * A step that runs an executable for a PatchJob.
     */
    preStep?: ExecStep;
    /**
     * Post-patch reboot settings.
     */
    rebootConfig?: PatchConfigRebootConfigEnum;
    /**
     * Windows patching is performed using the Windows Update Agent.
     */
    windowsUpdate?: WindowsUpdateSettings;
    /**
     * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
     */
    yum?: YumSettings;
    /**
     * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
     */
    zypper?: ZypperSettings;
}
