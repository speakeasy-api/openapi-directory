package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationBySubjectAndObjectCategorySearchPathParams struct {
	ObjectCategory  string `pathParam:"style=simple,explode=false,name=object_category"`
	SubjectCategory string `pathParam:"style=simple,explode=false,name=subject_category"`
}

type GetAssociationBySubjectAndObjectCategorySearchQueryParams struct {
	Evidence                   *string `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool   `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Object                     *string `queryParam:"style=form,explode=true,name=object"`
	ObjectTaxon                *string `queryParam:"style=form,explode=true,name=object_taxon"`
	Relation                   *string `queryParam:"style=form,explode=true,name=relation"`
	Rows                       *int64  `queryParam:"style=form,explode=true,name=rows"`
	Start                      *int64  `queryParam:"style=form,explode=true,name=start"`
	Subject                    *string `queryParam:"style=form,explode=true,name=subject"`
	SubjectTaxon               *string `queryParam:"style=form,explode=true,name=subject_taxon"`
	UnselectEvidence           *bool   `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool   `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetAssociationBySubjectAndObjectCategorySearchRequest struct {
	PathParams  GetAssociationBySubjectAndObjectCategorySearchPathParams
	QueryParams GetAssociationBySubjectAndObjectCategorySearchQueryParams
}

type GetAssociationBySubjectAndObjectCategorySearchResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
