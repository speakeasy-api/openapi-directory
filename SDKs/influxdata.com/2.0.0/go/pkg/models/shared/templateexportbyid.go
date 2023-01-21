package shared

type TemplateExportByIDOrgIDsResourceFilters struct {
	ByLabel        []string           `json:"byLabel,omitempty"`
	ByResourceKind []TemplateKindEnum `json:"byResourceKind,omitempty"`
}

type TemplateExportByIDOrgIDs struct {
	OrgID           *string                                  `json:"orgID,omitempty"`
	ResourceFilters *TemplateExportByIDOrgIDsResourceFilters `json:"resourceFilters,omitempty"`
}

type TemplateExportByIDResources struct {
	ID   string           `json:"id"`
	Kind TemplateKindEnum `json:"kind"`
	Name *string          `json:"name,omitempty"`
}

type TemplateExportByID struct {
	OrgIDs    []TemplateExportByIDOrgIDs   `json:"orgIDs,omitempty"`
	Resources *TemplateExportByIDResources `json:"resources,omitempty"`
	StackID   *string                      `json:"stackID,omitempty"`
}
