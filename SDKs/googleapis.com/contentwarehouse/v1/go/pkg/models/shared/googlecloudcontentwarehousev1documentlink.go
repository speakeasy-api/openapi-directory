package shared

type GoogleCloudContentwarehouseV1DocumentLinkStateEnum string

const (
	GoogleCloudContentwarehouseV1DocumentLinkStateEnumStateUnspecified GoogleCloudContentwarehouseV1DocumentLinkStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudContentwarehouseV1DocumentLinkStateEnumActive           GoogleCloudContentwarehouseV1DocumentLinkStateEnum = "ACTIVE"
	GoogleCloudContentwarehouseV1DocumentLinkStateEnumSoftDeleted      GoogleCloudContentwarehouseV1DocumentLinkStateEnum = "SOFT_DELETED"
)

// GoogleCloudContentwarehouseV1DocumentLinkInput
// A document-link between source and target document.
type GoogleCloudContentwarehouseV1DocumentLinkInput struct {
	Description             *string                                              `json:"description,omitempty"`
	Name                    *string                                              `json:"name,omitempty"`
	SourceDocumentReference *GoogleCloudContentwarehouseV1DocumentReferenceInput `json:"sourceDocumentReference,omitempty"`
	State                   *GoogleCloudContentwarehouseV1DocumentLinkStateEnum  `json:"state,omitempty"`
	TargetDocumentReference *GoogleCloudContentwarehouseV1DocumentReferenceInput `json:"targetDocumentReference,omitempty"`
}

// GoogleCloudContentwarehouseV1DocumentLink
// A document-link between source and target document.
type GoogleCloudContentwarehouseV1DocumentLink struct {
	CreateTime              *string                                             `json:"createTime,omitempty"`
	Description             *string                                             `json:"description,omitempty"`
	Name                    *string                                             `json:"name,omitempty"`
	SourceDocumentReference *GoogleCloudContentwarehouseV1DocumentReference     `json:"sourceDocumentReference,omitempty"`
	State                   *GoogleCloudContentwarehouseV1DocumentLinkStateEnum `json:"state,omitempty"`
	TargetDocumentReference *GoogleCloudContentwarehouseV1DocumentReference     `json:"targetDocumentReference,omitempty"`
	UpdateTime              *string                                             `json:"updateTime,omitempty"`
}
