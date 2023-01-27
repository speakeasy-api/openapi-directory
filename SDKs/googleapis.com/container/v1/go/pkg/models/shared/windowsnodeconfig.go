package shared

type WindowsNodeConfigOsVersionEnum string

const (
	WindowsNodeConfigOsVersionEnumOsVersionUnspecified WindowsNodeConfigOsVersionEnum = "OS_VERSION_UNSPECIFIED"
	WindowsNodeConfigOsVersionEnumOsVersionLtsc2019    WindowsNodeConfigOsVersionEnum = "OS_VERSION_LTSC2019"
	WindowsNodeConfigOsVersionEnumOsVersionLtsc2022    WindowsNodeConfigOsVersionEnum = "OS_VERSION_LTSC2022"
)

// WindowsNodeConfig
// Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings
type WindowsNodeConfig struct {
	OsVersion *WindowsNodeConfigOsVersionEnum `json:"osVersion,omitempty"`
}
