package shared

// GoogleCloudContentwarehouseV1DocumentReferenceInput
// References to the documents.
type GoogleCloudContentwarehouseV1DocumentReferenceInput struct {
	DisplayName      *string `json:"displayName,omitempty"`
	DocumentIsFolder *bool   `json:"documentIsFolder,omitempty"`
	DocumentName     *string `json:"documentName,omitempty"`
	Snippet          *string `json:"snippet,omitempty"`
}

// GoogleCloudContentwarehouseV1DocumentReference
// References to the documents.
type GoogleCloudContentwarehouseV1DocumentReference struct {
	CreateTime       *string `json:"createTime,omitempty"`
	DeleteTime       *string `json:"deleteTime,omitempty"`
	DisplayName      *string `json:"displayName,omitempty"`
	DocumentIsFolder *bool   `json:"documentIsFolder,omitempty"`
	DocumentName     *string `json:"documentName,omitempty"`
	Snippet          *string `json:"snippet,omitempty"`
	UpdateTime       *string `json:"updateTime,omitempty"`
}
