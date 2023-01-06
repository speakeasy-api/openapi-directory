package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeneDiseaseAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGeneDiseaseAssociationsAssociationTypeEnum string

const (
	GetGeneDiseaseAssociationsAssociationTypeEnumCausal    GetGeneDiseaseAssociationsAssociationTypeEnum = "causal"
	GetGeneDiseaseAssociationsAssociationTypeEnumNonCausal GetGeneDiseaseAssociationsAssociationTypeEnum = "non_causal"
	GetGeneDiseaseAssociationsAssociationTypeEnumBoth      GetGeneDiseaseAssociationsAssociationTypeEnum = "both"
)

type GetGeneDiseaseAssociationsQueryParams struct {
	AssociationType            *GetGeneDiseaseAssociationsAssociationTypeEnum `queryParam:"style=form,explode=true,name=association_type"`
	Direct                     *bool                                          `queryParam:"style=form,explode=true,name=direct"`
	DirectTaxon                *bool                                          `queryParam:"style=form,explode=true,name=direct_taxon"`
	Evidence                   *string                                        `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool                                          `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Facet                      *bool                                          `queryParam:"style=form,explode=true,name=facet"`
	FacetFields                []string                                       `queryParam:"style=form,explode=true,name=facet_fields"`
	FetchObjects               *bool                                          `queryParam:"style=form,explode=true,name=fetch_objects"`
	Q                          *string                                        `queryParam:"style=form,explode=true,name=q"`
	Relation                   *string                                        `queryParam:"style=form,explode=true,name=relation"`
	Rows                       *int64                                         `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string                                       `queryParam:"style=form,explode=true,name=slim"`
	Sort                       *string                                        `queryParam:"style=form,explode=true,name=sort"`
	Start                      *int64                                         `queryParam:"style=form,explode=true,name=start"`
	Taxon                      []string                                       `queryParam:"style=form,explode=true,name=taxon"`
	UnselectEvidence           *bool                                          `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool                                          `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetGeneDiseaseAssociationsRequest struct {
	PathParams  GetGeneDiseaseAssociationsPathParams
	QueryParams GetGeneDiseaseAssociationsQueryParams
}

type GetGeneDiseaseAssociationsResponse struct {
	AssociationResults *shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
