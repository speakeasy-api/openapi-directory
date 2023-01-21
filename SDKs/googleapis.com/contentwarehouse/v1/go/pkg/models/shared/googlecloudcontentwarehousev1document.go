package shared

type GoogleCloudContentwarehouseV1DocumentContentCategoryEnum string

const (
	GoogleCloudContentwarehouseV1DocumentContentCategoryEnumContentCategoryUnspecified GoogleCloudContentwarehouseV1DocumentContentCategoryEnum = "CONTENT_CATEGORY_UNSPECIFIED"
	GoogleCloudContentwarehouseV1DocumentContentCategoryEnumContentCategoryImage       GoogleCloudContentwarehouseV1DocumentContentCategoryEnum = "CONTENT_CATEGORY_IMAGE"
	GoogleCloudContentwarehouseV1DocumentContentCategoryEnumContentCategoryAudio       GoogleCloudContentwarehouseV1DocumentContentCategoryEnum = "CONTENT_CATEGORY_AUDIO"
	GoogleCloudContentwarehouseV1DocumentContentCategoryEnumContentCategoryVideo       GoogleCloudContentwarehouseV1DocumentContentCategoryEnum = "CONTENT_CATEGORY_VIDEO"
)

type GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum string

const (
	GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnumRawDocumentFileTypeUnspecified GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum = "RAW_DOCUMENT_FILE_TYPE_UNSPECIFIED"
	GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnumRawDocumentFileTypePdf         GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum = "RAW_DOCUMENT_FILE_TYPE_PDF"
	GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnumRawDocumentFileTypeDocx        GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum = "RAW_DOCUMENT_FILE_TYPE_DOCX"
	GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnumRawDocumentFileTypeXlsx        GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum = "RAW_DOCUMENT_FILE_TYPE_XLSX"
	GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnumRawDocumentFileTypePptx        GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum = "RAW_DOCUMENT_FILE_TYPE_PPTX"
	GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnumRawDocumentFileTypeText        GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum = "RAW_DOCUMENT_FILE_TYPE_TEXT"
)

// GoogleCloudContentwarehouseV1Document
// Defines the structure for content warehouse document proto.
type GoogleCloudContentwarehouseV1Document struct {
	AsyncEnabled           *bool                                                         `json:"asyncEnabled,omitempty"`
	CloudAiDocument        *GoogleCloudDocumentaiV1Document                              `json:"cloudAiDocument,omitempty"`
	ContentCategory        *GoogleCloudContentwarehouseV1DocumentContentCategoryEnum     `json:"contentCategory,omitempty"`
	CreateTime             *string                                                       `json:"createTime,omitempty"`
	Creator                *string                                                       `json:"creator,omitempty"`
	DisplayName            *string                                                       `json:"displayName,omitempty"`
	DisplayURI             *string                                                       `json:"displayUri,omitempty"`
	DocumentSchemaName     *string                                                       `json:"documentSchemaName,omitempty"`
	InlineRawDocument      *string                                                       `json:"inlineRawDocument,omitempty"`
	Name                   *string                                                       `json:"name,omitempty"`
	PlainText              *string                                                       `json:"plainText,omitempty"`
	Properties             []GoogleCloudContentwarehouseV1Property                       `json:"properties,omitempty"`
	RawDocumentFileType    *GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum `json:"rawDocumentFileType,omitempty"`
	RawDocumentPath        *string                                                       `json:"rawDocumentPath,omitempty"`
	ReferenceID            *string                                                       `json:"referenceId,omitempty"`
	StructuredContentURI   *string                                                       `json:"structuredContentUri,omitempty"`
	TextExtractionDisabled *bool                                                         `json:"textExtractionDisabled,omitempty"`
	Title                  *string                                                       `json:"title,omitempty"`
	UpdateTime             *string                                                       `json:"updateTime,omitempty"`
	Updater                *string                                                       `json:"updater,omitempty"`
}

// GoogleCloudContentwarehouseV1DocumentInput
// Defines the structure for content warehouse document proto.
type GoogleCloudContentwarehouseV1DocumentInput struct {
	AsyncEnabled           *bool                                                         `json:"asyncEnabled,omitempty"`
	CloudAiDocument        *GoogleCloudDocumentaiV1Document                              `json:"cloudAiDocument,omitempty"`
	ContentCategory        *GoogleCloudContentwarehouseV1DocumentContentCategoryEnum     `json:"contentCategory,omitempty"`
	Creator                *string                                                       `json:"creator,omitempty"`
	DisplayName            *string                                                       `json:"displayName,omitempty"`
	DisplayURI             *string                                                       `json:"displayUri,omitempty"`
	DocumentSchemaName     *string                                                       `json:"documentSchemaName,omitempty"`
	InlineRawDocument      *string                                                       `json:"inlineRawDocument,omitempty"`
	Name                   *string                                                       `json:"name,omitempty"`
	PlainText              *string                                                       `json:"plainText,omitempty"`
	Properties             []GoogleCloudContentwarehouseV1Property                       `json:"properties,omitempty"`
	RawDocumentFileType    *GoogleCloudContentwarehouseV1DocumentRawDocumentFileTypeEnum `json:"rawDocumentFileType,omitempty"`
	RawDocumentPath        *string                                                       `json:"rawDocumentPath,omitempty"`
	ReferenceID            *string                                                       `json:"referenceId,omitempty"`
	StructuredContentURI   *string                                                       `json:"structuredContentUri,omitempty"`
	TextExtractionDisabled *bool                                                         `json:"textExtractionDisabled,omitempty"`
	Title                  *string                                                       `json:"title,omitempty"`
	Updater                *string                                                       `json:"updater,omitempty"`
}
