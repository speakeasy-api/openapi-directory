package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeneHomologAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGeneHomologAssociationsHomologyTypeEnum string

const (
	GetGeneHomologAssociationsHomologyTypeEnumP   GetGeneHomologAssociationsHomologyTypeEnum = "P"
	GetGeneHomologAssociationsHomologyTypeEnumO   GetGeneHomologAssociationsHomologyTypeEnum = "O"
	GetGeneHomologAssociationsHomologyTypeEnumLdo GetGeneHomologAssociationsHomologyTypeEnum = "LDO"
)

type GetGeneHomologAssociationsQueryParams struct {
	Direct                     *bool                                       `queryParam:"style=form,explode=true,name=direct"`
	DirectTaxon                *bool                                       `queryParam:"style=form,explode=true,name=direct_taxon"`
	Evidence                   *string                                     `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool                                       `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Facet                      *bool                                       `queryParam:"style=form,explode=true,name=facet"`
	FacetFields                []string                                    `queryParam:"style=form,explode=true,name=facet_fields"`
	FetchObjects               *bool                                       `queryParam:"style=form,explode=true,name=fetch_objects"`
	HomologyType               *GetGeneHomologAssociationsHomologyTypeEnum `queryParam:"style=form,explode=true,name=homology_type"`
	Rows                       *int64                                      `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string                                    `queryParam:"style=form,explode=true,name=slim"`
	Start                      *int64                                      `queryParam:"style=form,explode=true,name=start"`
	Taxon                      []string                                    `queryParam:"style=form,explode=true,name=taxon"`
	UnselectEvidence           *bool                                       `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool                                       `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetGeneHomologAssociationsRequest struct {
	PathParams  GetGeneHomologAssociationsPathParams
	QueryParams GetGeneHomologAssociationsQueryParams
}

type GetGeneHomologAssociationsResponse struct {
	AssociationResults *shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
