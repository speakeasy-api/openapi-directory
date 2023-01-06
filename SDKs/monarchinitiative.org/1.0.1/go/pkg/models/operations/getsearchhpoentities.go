package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchHpoEntitiesPathParams struct {
	Term string `pathParam:"style=simple,explode=false,name=term"`
}

type GetSearchHpoEntitiesQueryParams struct {
	AnatomicalSystem      *string `queryParam:"style=form,explode=true,name=anatomical_system"`
	AnatomicalSystemLabel *string `queryParam:"style=form,explode=true,name=anatomical_system_label"`
	HighlightClass        *string `queryParam:"style=form,explode=true,name=highlight_class"`
	PhenotypeGroup        *string `queryParam:"style=form,explode=true,name=phenotype_group"`
	PhenotypeGroupLabel   *string `queryParam:"style=form,explode=true,name=phenotype_group_label"`
	Rows                  *int64  `queryParam:"style=form,explode=true,name=rows"`
	Start                 *string `queryParam:"style=form,explode=true,name=start"`
}

type GetSearchHpoEntitiesRequest struct {
	PathParams  GetSearchHpoEntitiesPathParams
	QueryParams GetSearchHpoEntitiesQueryParams
}

type GetSearchHpoEntitiesResponse struct {
	ContentType string
	LayResults  *shared.LayResults
	StatusCode  int64
}
