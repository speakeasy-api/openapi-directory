package shared

type GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnum string

const (
	GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnumFileTypeUnspecified GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnum = "FILE_TYPE_UNSPECIFIED"
	GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnumAll                 GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnum = "ALL"
	GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnumFolder              GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnum = "FOLDER"
	GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnumDocument            GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnum = "DOCUMENT"
)

// GoogleCloudContentwarehouseV1FileTypeFilter
// Filter for the specific types of documents returned.
type GoogleCloudContentwarehouseV1FileTypeFilter struct {
	FileType *GoogleCloudContentwarehouseV1FileTypeFilterFileTypeEnum `json:"fileType,omitempty"`
}
