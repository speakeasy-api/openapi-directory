package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchEntitiesPathParams struct {
	Term string `pathParam:"style=simple,explode=false,name=term"`
}

type GetSearchEntitiesQueryParams struct {
	BoostFx          []string `queryParam:"style=form,explode=true,name=boost_fx"`
	BoostQ           []string `queryParam:"style=form,explode=true,name=boost_q"`
	Category         []string `queryParam:"style=form,explode=true,name=category"`
	ExcludeGroups    *bool    `queryParam:"style=form,explode=true,name=exclude_groups"`
	Fq               []string `queryParam:"style=form,explode=true,name=fq"`
	HighlightClass   *string  `queryParam:"style=form,explode=true,name=highlight_class"`
	IncludeEqs       *bool    `queryParam:"style=form,explode=true,name=include_eqs"`
	MinMatch         *string  `queryParam:"style=form,explode=true,name=min_match"`
	MinimalTokenizer *bool    `queryParam:"style=form,explode=true,name=minimal_tokenizer"`
	Prefix           []string `queryParam:"style=form,explode=true,name=prefix"`
	Rows             *int64   `queryParam:"style=form,explode=true,name=rows"`
	Start            *string  `queryParam:"style=form,explode=true,name=start"`
	Taxon            []string `queryParam:"style=form,explode=true,name=taxon"`
}

type GetSearchEntitiesRequest struct {
	PathParams  GetSearchEntitiesPathParams
	QueryParams GetSearchEntitiesQueryParams
}

type GetSearchEntitiesResponse struct {
	ContentType  string
	SearchResult *shared.SearchResult
	StatusCode   int64
}
