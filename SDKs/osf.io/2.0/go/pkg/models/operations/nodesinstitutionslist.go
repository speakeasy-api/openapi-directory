// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type NodesInstitutionsListRequest struct {
	// The unique identifier of the node.
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

// NodesInstitutionsListInstitutionAttributes - The properties of the institution entity.
type NodesInstitutionsListInstitutionAttributes struct {
	// Url used to authenticate institution specific login.
	AuthURL *string
	// Description of the institution.
	Description *string
	// Static path to the institution specific logo.
	LogoPath *string
	// Full name of the institution.
	Name *string
}

// NodesInstitutionsListInstitutionLinks - URLs to alternative representations of the institutions entity.
type NodesInstitutionsListInstitutionLinks struct {
	// A link to the detail page for the institution.
	Self *string
}

// NodesInstitutionsListInstitutionRelationships - URLs to other entities or entity collections that have a relationship to the institution entity.
type NodesInstitutionsListInstitutionRelationships struct {
	// A relationship to the nodes affiliated with the institution.
	Nodes *string
	// A relationship to the registrations affiliated with the institution.
	Registrations *string
	// A relationship to the users affiliated with the institution.
	Users *string
}

type NodesInstitutionsListInstitution struct {
	// The properties of the institution entity.
	Attributes *NodesInstitutionsListInstitutionAttributes
	// The identifier of the institution entity.
	ID *string
	// URLs to alternative representations of the institutions entity.
	Links *NodesInstitutionsListInstitutionLinks
	// URLs to other entities or entity collections that have a relationship to the institution entity.
	Relationships *NodesInstitutionsListInstitutionRelationships
	// The type identifier of the institution entity (`institutions`).
	Type *string
}

type NodesInstitutionsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
