package shared

type GoogleCloudDataplexV1StorageAccessReadEnum string

const (
	GoogleCloudDataplexV1StorageAccessReadEnumAccessModeUnspecified GoogleCloudDataplexV1StorageAccessReadEnum = "ACCESS_MODE_UNSPECIFIED"
	GoogleCloudDataplexV1StorageAccessReadEnumDirect                GoogleCloudDataplexV1StorageAccessReadEnum = "DIRECT"
	GoogleCloudDataplexV1StorageAccessReadEnumManaged               GoogleCloudDataplexV1StorageAccessReadEnum = "MANAGED"
)

// GoogleCloudDataplexV1StorageAccess
// Describes the access mechanism of the data within its storage location.
type GoogleCloudDataplexV1StorageAccess struct {
	Read *GoogleCloudDataplexV1StorageAccessReadEnum `json:"read,omitempty"`
}
