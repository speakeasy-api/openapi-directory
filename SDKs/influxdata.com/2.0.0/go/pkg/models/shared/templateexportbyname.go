package shared

type TemplateExportByNameOrgIDsResourceFilters struct {
	ByLabel        []string           `json:"byLabel,omitempty"`
	ByResourceKind []TemplateKindEnum `json:"byResourceKind,omitempty"`
}

type TemplateExportByNameOrgIDs struct {
	OrgID           *string                                    `json:"orgID,omitempty"`
	ResourceFilters *TemplateExportByNameOrgIDsResourceFilters `json:"resourceFilters,omitempty"`
}

type TemplateExportByNameResources struct {
	Kind TemplateKindEnum `json:"kind"`
	Name string           `json:"name"`
}

type TemplateExportByName struct {
	OrgIDs    []TemplateExportByNameOrgIDs   `json:"orgIDs,omitempty"`
	Resources *TemplateExportByNameResources `json:"resources,omitempty"`
	StackID   *string                        `json:"stackID,omitempty"`
}
