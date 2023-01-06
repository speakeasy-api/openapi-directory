package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationBySubjectCategorySearchPathParams struct {
	SubjectCategory string `pathParam:"style=simple,explode=false,name=subject_category"`
}

type GetAssociationBySubjectCategorySearchQueryParams struct {
	Evidence                   *string `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool   `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	ObjectTaxon                *string `queryParam:"style=form,explode=true,name=object_taxon"`
	Relation                   *string `queryParam:"style=form,explode=true,name=relation"`
	Rows                       *int64  `queryParam:"style=form,explode=true,name=rows"`
	Start                      *int64  `queryParam:"style=form,explode=true,name=start"`
	SubjectTaxon               *string `queryParam:"style=form,explode=true,name=subject_taxon"`
	UnselectEvidence           *bool   `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool   `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetAssociationBySubjectCategorySearchRequest struct {
	PathParams  GetAssociationBySubjectCategorySearchPathParams
	QueryParams GetAssociationBySubjectCategorySearchQueryParams
}

type GetAssociationBySubjectCategorySearchResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
