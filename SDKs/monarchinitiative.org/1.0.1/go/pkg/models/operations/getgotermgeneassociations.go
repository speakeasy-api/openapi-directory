package operations

import (
	"openapi/pkg/models/shared"
)

type GetGotermGeneAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGotermGeneAssociationsRelationshipTypeEnum string

const (
	GetGotermGeneAssociationsRelationshipTypeEnumInvolvedIn             GetGotermGeneAssociationsRelationshipTypeEnum = "involved_in"
	GetGotermGeneAssociationsRelationshipTypeEnumInvolvedInRegulationOf GetGotermGeneAssociationsRelationshipTypeEnum = "involved_in_regulation_of"
	GetGotermGeneAssociationsRelationshipTypeEnumActsUpstreamOfOrWithin GetGotermGeneAssociationsRelationshipTypeEnum = "acts_upstream_of_or_within"
)

type GetGotermGeneAssociationsQueryParams struct {
	Direct                     *bool                                          `queryParam:"style=form,explode=true,name=direct"`
	Evidence                   *string                                        `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool                                          `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Facet                      *bool                                          `queryParam:"style=form,explode=true,name=facet"`
	FacetFields                []string                                       `queryParam:"style=form,explode=true,name=facet_fields"`
	FetchObjects               *bool                                          `queryParam:"style=form,explode=true,name=fetch_objects"`
	RelationshipType           *GetGotermGeneAssociationsRelationshipTypeEnum `queryParam:"style=form,explode=true,name=relationship_type"`
	Rows                       *int64                                         `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string                                       `queryParam:"style=form,explode=true,name=slim"`
	Start                      *int64                                         `queryParam:"style=form,explode=true,name=start"`
	UnselectEvidence           *bool                                          `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool                                          `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetGotermGeneAssociationsRequest struct {
	PathParams  GetGotermGeneAssociationsPathParams
	QueryParams GetGotermGeneAssociationsQueryParams
}

type GetGotermGeneAssociationsResponse struct {
	AssociationResults *shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
