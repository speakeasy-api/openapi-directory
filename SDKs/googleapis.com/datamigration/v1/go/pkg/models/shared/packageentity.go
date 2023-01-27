package shared

// PackageEntity
// Package's parent is a schema.
type PackageEntity struct {
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	PackageBody    *string                `json:"packageBody,omitempty"`
	PackageSQLCode *string                `json:"packageSqlCode,omitempty"`
}
