package shared

type GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnum string

const (
	GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnumTimeFieldUnspecified GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnum = "TIME_FIELD_UNSPECIFIED"
	GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnumCreateTime           GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnum = "CREATE_TIME"
	GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnumUpdateTime           GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnum = "UPDATE_TIME"
)

// GoogleCloudContentwarehouseV1TimeFilter
// Filter on create timestamp or update timestamp of documents.
type GoogleCloudContentwarehouseV1TimeFilter struct {
	TimeField *GoogleCloudContentwarehouseV1TimeFilterTimeFieldEnum `json:"timeField,omitempty"`
	TimeRange *GoogleTypeInterval                                   `json:"timeRange,omitempty"`
}
