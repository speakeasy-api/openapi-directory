// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type NodesAddonsListRequest struct {
	// The unique identifier of the node.
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesAddonsListAddonAttributesCategoriesEnum string

const (
	NodesAddonsListAddonAttributesCategoriesEnumDocumentation NodesAddonsListAddonAttributesCategoriesEnum = "documentation"
	NodesAddonsListAddonAttributesCategoriesEnumStorage       NodesAddonsListAddonAttributesCategoriesEnum = "storage"
	NodesAddonsListAddonAttributesCategoriesEnumBibliography  NodesAddonsListAddonAttributesCategoriesEnum = "bibliography"
	NodesAddonsListAddonAttributesCategoriesEnumOther         NodesAddonsListAddonAttributesCategoriesEnum = "other"
	NodesAddonsListAddonAttributesCategoriesEnumSecurity      NodesAddonsListAddonAttributesCategoriesEnum = "security"
	NodesAddonsListAddonAttributesCategoriesEnumCitations     NodesAddonsListAddonAttributesCategoriesEnum = "citations"
)

func (e NodesAddonsListAddonAttributesCategoriesEnum) ToPointer() *NodesAddonsListAddonAttributesCategoriesEnum {
	return &e
}

func (e *NodesAddonsListAddonAttributesCategoriesEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "documentation":
		fallthrough
	case "storage":
		fallthrough
	case "bibliography":
		fallthrough
	case "other":
		fallthrough
	case "security":
		fallthrough
	case "citations":
		*e = NodesAddonsListAddonAttributesCategoriesEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for NodesAddonsListAddonAttributesCategoriesEnum: %v", v)
	}
}

// NodesAddonsListAddonAttributes - The properties of the addon entity.
type NodesAddonsListAddonAttributes struct {
	// List of categories this addon belongs to.
	Categories []NodesAddonsListAddonAttributesCategoriesEnum
	// The description of the service provider.
	Description *string
	// The name of the third-party service provider.
	Name *string
	// The URL to the third-party service provider.
	URL *string
}

type NodesAddonsListAddon struct {
	// The properties of the addon entity.
	Attributes *NodesAddonsListAddonAttributes
	// The identifier of the addon entity.
	ID *string
	// The type identifier of the addon entity (`addons`).
	Type *string
}

type NodesAddonsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
