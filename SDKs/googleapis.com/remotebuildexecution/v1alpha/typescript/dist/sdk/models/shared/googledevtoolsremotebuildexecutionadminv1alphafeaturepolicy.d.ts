import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature";
/**
 * Defines the hermeticity policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum {
    ActionHermeticityUnspecified = "ACTION_HERMETICITY_UNSPECIFIED",
    ActionHermeticityOff = "ACTION_HERMETICITY_OFF",
    ActionHermeticityEnforced = "ACTION_HERMETICITY_ENFORCED",
    ActionHermeticityBestEffort = "ACTION_HERMETICITY_BEST_EFFORT"
}
/**
 * Defines the isolation policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum {
    ActionIsolationUnspecified = "ACTION_ISOLATION_UNSPECIFIED",
    ActionIsolationOff = "ACTION_ISOLATION_OFF",
    ActionIsolationEnforced = "ACTION_ISOLATION_ENFORCED"
}
/**
 * Defines how Linux actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum {
    LinuxExecutionUnspecified = "LINUX_EXECUTION_UNSPECIFIED",
    LinuxExecutionForbidden = "LINUX_EXECUTION_FORBIDDEN",
    LinuxExecutionUnrestricted = "LINUX_EXECUTION_UNRESTRICTED",
    LinuxExecutionHardenedGvisor = "LINUX_EXECUTION_HARDENED_GVISOR",
    LinuxExecutionHardenedGvisorOrTerminal = "LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL"
}
/**
 * linux_isolation allows overriding the docker runtime used for containers started on Linux.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum {
    LinuxIsolationUnspecified = "LINUX_ISOLATION_UNSPECIFIED",
    Gvisor = "GVISOR",
    Off = "OFF"
}
/**
 * Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum {
    MacExecutionUnspecified = "MAC_EXECUTION_UNSPECIFIED",
    MacExecutionForbidden = "MAC_EXECUTION_FORBIDDEN"
}
/**
 * Whether to verify CreateBotSession and UpdateBotSession from the bot.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum {
    VmVerificationUnspecified = "VM_VERIFICATION_UNSPECIFIED",
    VmVerificationGcpToken = "VM_VERIFICATION_GCP_TOKEN",
    VmVerificationOff = "VM_VERIFICATION_OFF"
}
/**
 * Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum {
    WindowsExecutionUnspecified = "WINDOWS_EXECUTION_UNSPECIFIED",
    WindowsExecutionForbidden = "WINDOWS_EXECUTION_FORBIDDEN",
    WindowsExecutionUnrestricted = "WINDOWS_EXECUTION_UNRESTRICTED",
    WindowsExecutionTerminal = "WINDOWS_EXECUTION_TERMINAL"
}
/**
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy extends SpeakeasyBase {
    /**
     * Defines the hermeticity policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature.
     */
    actionHermeticity?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;
    /**
     * Defines the isolation policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature.
     */
    actionIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    containerImageSources?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerAddCapabilities?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerRunAsContainerProvidedUser?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines whether a feature can be used or what values are accepted.
     */
    dockerSiblingContainers?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    /**
     * Defines how Linux actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature.
     */
    linuxExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;
    /**
     * linux_isolation allows overriding the docker runtime used for containers started on Linux.
     */
    linuxIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
    /**
     * Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature.
     */
    macExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;
    /**
     * Whether to verify CreateBotSession and UpdateBotSession from the bot.
     */
    vmVerification?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
    /**
     * Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature.
     */
    windowsExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
}
