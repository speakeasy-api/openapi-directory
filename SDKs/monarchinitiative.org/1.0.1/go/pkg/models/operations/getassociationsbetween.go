package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationsBetweenPathParams struct {
	Object  string `pathParam:"style=simple,explode=false,name=object"`
	Subject string `pathParam:"style=simple,explode=false,name=subject"`
}

type GetAssociationsBetweenQueryParams struct {
	Evidence                   *string `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool   `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Rows                       *int64  `queryParam:"style=form,explode=true,name=rows"`
	Start                      *int64  `queryParam:"style=form,explode=true,name=start"`
	UnselectEvidence           *bool   `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool   `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetAssociationsBetweenRequest struct {
	PathParams  GetAssociationsBetweenPathParams
	QueryParams GetAssociationsBetweenQueryParams
}

type GetAssociationsBetweenResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
