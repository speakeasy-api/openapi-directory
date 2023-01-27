package shared

type InstanceConfigInstanceSizeEnum string

const (
	InstanceConfigInstanceSizeEnumInstanceSizeUnspecified InstanceConfigInstanceSizeEnum = "INSTANCE_SIZE_UNSPECIFIED"
	InstanceConfigInstanceSizeEnumStandardSmall           InstanceConfigInstanceSizeEnum = "STANDARD_SMALL"
	InstanceConfigInstanceSizeEnumStandardMedium          InstanceConfigInstanceSizeEnum = "STANDARD_MEDIUM"
	InstanceConfigInstanceSizeEnumStandardLarge           InstanceConfigInstanceSizeEnum = "STANDARD_LARGE"
)

// InstanceConfig
// Message storing the instance configuration.
type InstanceConfig struct {
	InstanceSize *InstanceConfigInstanceSizeEnum `json:"instanceSize,omitempty"`
}
