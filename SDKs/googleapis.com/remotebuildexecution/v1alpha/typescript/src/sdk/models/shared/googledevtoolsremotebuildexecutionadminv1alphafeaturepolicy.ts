import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature";


export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum {
    ActionHermeticityUnspecified = "ACTION_HERMETICITY_UNSPECIFIED",
    ActionHermeticityOff = "ACTION_HERMETICITY_OFF",
    ActionHermeticityEnforced = "ACTION_HERMETICITY_ENFORCED",
    ActionHermeticityBestEffort = "ACTION_HERMETICITY_BEST_EFFORT"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum {
    ActionIsolationUnspecified = "ACTION_ISOLATION_UNSPECIFIED",
    ActionIsolationOff = "ACTION_ISOLATION_OFF",
    ActionIsolationEnforced = "ACTION_ISOLATION_ENFORCED"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum {
    LinuxExecutionUnspecified = "LINUX_EXECUTION_UNSPECIFIED",
    LinuxExecutionForbidden = "LINUX_EXECUTION_FORBIDDEN",
    LinuxExecutionUnrestricted = "LINUX_EXECUTION_UNRESTRICTED",
    LinuxExecutionHardenedGvisor = "LINUX_EXECUTION_HARDENED_GVISOR",
    LinuxExecutionHardenedGvisorOrTerminal = "LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum {
    LinuxIsolationUnspecified = "LINUX_ISOLATION_UNSPECIFIED",
    Gvisor = "GVISOR",
    Off = "OFF"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum {
    MacExecutionUnspecified = "MAC_EXECUTION_UNSPECIFIED",
    MacExecutionForbidden = "MAC_EXECUTION_FORBIDDEN"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum {
    VmVerificationUnspecified = "VM_VERIFICATION_UNSPECIFIED",
    VmVerificationGcpToken = "VM_VERIFICATION_GCP_TOKEN",
    VmVerificationOff = "VM_VERIFICATION_OFF"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum {
    WindowsExecutionUnspecified = "WINDOWS_EXECUTION_UNSPECIFIED",
    WindowsExecutionForbidden = "WINDOWS_EXECUTION_FORBIDDEN",
    WindowsExecutionUnrestricted = "WINDOWS_EXECUTION_UNRESTRICTED",
    WindowsExecutionTerminal = "WINDOWS_EXECUTION_TERMINAL"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
/** 
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionHermeticity" })
  actionHermeticity?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;

  @SpeakeasyMetadata({ data: "json, name=actionIsolation" })
  actionIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;

  @SpeakeasyMetadata({ data: "json, name=containerImageSources" })
  containerImageSources?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerAddCapabilities" })
  dockerAddCapabilities?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerChrootPath" })
  dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerNetwork" })
  dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerPrivileged" })
  dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerRunAsContainerProvidedUser" })
  dockerRunAsContainerProvidedUser?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerRunAsRoot" })
  dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerRuntime" })
  dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerSiblingContainers" })
  dockerSiblingContainers?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=linuxExecution" })
  linuxExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;

  @SpeakeasyMetadata({ data: "json, name=linuxIsolation" })
  linuxIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;

  @SpeakeasyMetadata({ data: "json, name=macExecution" })
  macExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;

  @SpeakeasyMetadata({ data: "json, name=vmVerification" })
  vmVerification?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;

  @SpeakeasyMetadata({ data: "json, name=windowsExecution" })
  windowsExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
}
