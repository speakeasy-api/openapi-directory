package shared

// Package
// Represents a complete package source tree.
type Package struct {
	Files   []File  `json:"files,omitempty"`
	Package *string `json:"package,omitempty"`
	Path    *string `json:"path,omitempty"`
	Type    *string `json:"type,omitempty"`
}
