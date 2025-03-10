// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// DependencyRelationshipEnum - A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
type DependencyRelationshipEnum string

const (
	DependencyRelationshipEnumDirect   DependencyRelationshipEnum = "direct"
	DependencyRelationshipEnumIndirect DependencyRelationshipEnum = "indirect"
)

func (e DependencyRelationshipEnum) ToPointer() *DependencyRelationshipEnum {
	return &e
}

func (e *DependencyRelationshipEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "direct":
		fallthrough
	case "indirect":
		*e = DependencyRelationshipEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DependencyRelationshipEnum: %v", v)
	}
}

// DependencyScopeEnum - A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
type DependencyScopeEnum string

const (
	DependencyScopeEnumRuntime     DependencyScopeEnum = "runtime"
	DependencyScopeEnumDevelopment DependencyScopeEnum = "development"
)

func (e DependencyScopeEnum) ToPointer() *DependencyScopeEnum {
	return &e
}

func (e *DependencyScopeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "runtime":
		fallthrough
	case "development":
		*e = DependencyScopeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DependencyScopeEnum: %v", v)
	}
}

type Dependency struct {
	// Array of package-url (PURLs) of direct child dependencies.
	Dependencies []string `json:"dependencies,omitempty"`
	// User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
	Metadata map[string]interface{} `json:"metadata,omitempty"`
	// Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.
	PackageURL *string `json:"package_url,omitempty"`
	// A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
	Relationship *DependencyRelationshipEnum `json:"relationship,omitempty"`
	// A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
	Scope *DependencyScopeEnum `json:"scope,omitempty"`
}
