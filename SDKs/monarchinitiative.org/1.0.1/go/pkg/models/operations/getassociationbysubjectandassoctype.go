package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationBySubjectAndAssocTypePathParams struct {
	AssociationType string `pathParam:"style=simple,explode=false,name=association_type"`
}

type GetAssociationBySubjectAndAssocTypeQueryParams struct {
	Evidence                   *string `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool   `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Object                     *string `queryParam:"style=form,explode=true,name=object"`
	Rows                       *int64  `queryParam:"style=form,explode=true,name=rows"`
	Start                      *int64  `queryParam:"style=form,explode=true,name=start"`
	Subject                    *string `queryParam:"style=form,explode=true,name=subject"`
	UnselectEvidence           *bool   `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool   `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetAssociationBySubjectAndAssocTypeRequest struct {
	PathParams  GetAssociationBySubjectAndAssocTypePathParams
	QueryParams GetAssociationBySubjectAndAssocTypeQueryParams
}

type GetAssociationBySubjectAndAssocTypeResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
