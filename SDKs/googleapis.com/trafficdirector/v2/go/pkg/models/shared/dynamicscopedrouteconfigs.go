// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DynamicScopedRouteConfigs struct {
	// The timestamp when the scoped route config set was last updated.
	LastUpdated *string `json:"lastUpdated,omitempty"`
	// The name assigned to the scoped route configurations.
	Name *string `json:"name,omitempty"`
	// The scoped route configurations.
	ScopedRouteConfigs []map[string]interface{} `json:"scopedRouteConfigs,omitempty"`
	// This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded.
	VersionInfo *string `json:"versionInfo,omitempty"`
}
