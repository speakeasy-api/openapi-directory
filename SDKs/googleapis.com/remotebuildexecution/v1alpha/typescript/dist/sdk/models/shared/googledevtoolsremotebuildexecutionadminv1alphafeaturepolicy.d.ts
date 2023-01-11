import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature";
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum {
    ActionHermeticityUnspecified = "ACTION_HERMETICITY_UNSPECIFIED",
    ActionHermeticityOff = "ACTION_HERMETICITY_OFF",
    ActionHermeticityEnforced = "ACTION_HERMETICITY_ENFORCED",
    ActionHermeticityBestEffort = "ACTION_HERMETICITY_BEST_EFFORT"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum {
    ActionIsolationUnspecified = "ACTION_ISOLATION_UNSPECIFIED",
    ActionIsolationOff = "ACTION_ISOLATION_OFF",
    ActionIsolationEnforced = "ACTION_ISOLATION_ENFORCED"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum {
    LinuxExecutionUnspecified = "LINUX_EXECUTION_UNSPECIFIED",
    LinuxExecutionForbidden = "LINUX_EXECUTION_FORBIDDEN",
    LinuxExecutionUnrestricted = "LINUX_EXECUTION_UNRESTRICTED",
    LinuxExecutionHardenedGvisor = "LINUX_EXECUTION_HARDENED_GVISOR",
    LinuxExecutionHardenedGvisorOrTerminal = "LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum {
    LinuxIsolationUnspecified = "LINUX_ISOLATION_UNSPECIFIED",
    Gvisor = "GVISOR",
    Off = "OFF"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum {
    MacExecutionUnspecified = "MAC_EXECUTION_UNSPECIFIED",
    MacExecutionForbidden = "MAC_EXECUTION_FORBIDDEN"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum {
    VmVerificationUnspecified = "VM_VERIFICATION_UNSPECIFIED",
    VmVerificationGcpToken = "VM_VERIFICATION_GCP_TOKEN",
    VmVerificationOff = "VM_VERIFICATION_OFF"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum {
    WindowsExecutionUnspecified = "WINDOWS_EXECUTION_UNSPECIFIED",
    WindowsExecutionForbidden = "WINDOWS_EXECUTION_FORBIDDEN",
    WindowsExecutionUnrestricted = "WINDOWS_EXECUTION_UNRESTRICTED",
    WindowsExecutionTerminal = "WINDOWS_EXECUTION_TERMINAL"
}
/**
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
**/
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy extends SpeakeasyBase {
    actionHermeticity?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;
    actionIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;
    containerImageSources?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerAddCapabilities?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerRunAsContainerProvidedUser?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerSiblingContainers?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    linuxExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;
    linuxIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
    macExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;
    vmVerification?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
    windowsExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
}
