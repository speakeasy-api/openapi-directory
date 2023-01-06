package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnumActionHermeticityUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum = "ACTION_HERMETICITY_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnumActionHermeticityOff         GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum = "ACTION_HERMETICITY_OFF"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnumActionHermeticityEnforced    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum = "ACTION_HERMETICITY_ENFORCED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnumActionHermeticityBestEffort  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum = "ACTION_HERMETICITY_BEST_EFFORT"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnumActionIsolationUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum = "ACTION_ISOLATION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnumActionIsolationOff         GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum = "ACTION_ISOLATION_OFF"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnumActionIsolationEnforced    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum = "ACTION_ISOLATION_ENFORCED"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionUnspecified              GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum = "LINUX_EXECUTION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionForbidden                GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum = "LINUX_EXECUTION_FORBIDDEN"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionUnrestricted             GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum = "LINUX_EXECUTION_UNRESTRICTED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionHardenedGvisor           GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum = "LINUX_EXECUTION_HARDENED_GVISOR"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionHardenedGvisorOrTerminal GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum = "LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumLinuxIsolationUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = "LINUX_ISOLATION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumGvisor                    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = "GVISOR"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumOff                       GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = "OFF"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnumMacExecutionUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum = "MAC_EXECUTION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnumMacExecutionForbidden   GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum = "MAC_EXECUTION_FORBIDDEN"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum = "VM_VERIFICATION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationGcpToken    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum = "VM_VERIFICATION_GCP_TOKEN"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationOff         GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum = "VM_VERIFICATION_OFF"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnumWindowsExecutionUnspecified  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum = "WINDOWS_EXECUTION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnumWindowsExecutionForbidden    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum = "WINDOWS_EXECUTION_FORBIDDEN"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnumWindowsExecutionUnrestricted GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum = "WINDOWS_EXECUTION_UNRESTRICTED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnumWindowsExecutionTerminal     GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum = "WINDOWS_EXECUTION_TERMINAL"
)

// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
// FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy struct {
	ActionHermeticity                *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum `json:"actionHermeticity,omitempty"`
	ActionIsolation                  *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum   `json:"actionIsolation,omitempty"`
	ContainerImageSources            *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"containerImageSources,omitempty"`
	DockerAddCapabilities            *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerAddCapabilities,omitempty"`
	DockerChrootPath                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerChrootPath,omitempty"`
	DockerNetwork                    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerNetwork,omitempty"`
	DockerPrivileged                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerPrivileged,omitempty"`
	DockerRunAsContainerProvidedUser *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerRunAsContainerProvidedUser,omitempty"`
	DockerRunAsRoot                  *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerRunAsRoot,omitempty"`
	DockerRuntime                    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerRuntime,omitempty"`
	DockerSiblingContainers          *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature               `json:"dockerSiblingContainers,omitempty"`
	LinuxExecution                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum    `json:"linuxExecution,omitempty"`
	LinuxIsolation                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum    `json:"linuxIsolation,omitempty"`
	MacExecution                     *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum      `json:"macExecution,omitempty"`
	VMVerification                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum    `json:"vmVerification,omitempty"`
	WindowsExecution                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum  `json:"windowsExecution,omitempty"`
}
