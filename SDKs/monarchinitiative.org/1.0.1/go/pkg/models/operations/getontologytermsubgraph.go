package operations

type GetOntologyTermSubgraphPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOntologyTermSubgraphQueryParams struct {
	Cnode              []string `queryParam:"style=form,explode=true,name=cnode"`
	IncludeAncestors   *bool    `queryParam:"style=form,explode=true,name=include_ancestors"`
	IncludeDescendants *bool    `queryParam:"style=form,explode=true,name=include_descendants"`
	IncludeMeta        *bool    `queryParam:"style=form,explode=true,name=include_meta"`
	Relation           []string `queryParam:"style=form,explode=true,name=relation"`
}

type GetOntologyTermSubgraphRequest struct {
	PathParams  GetOntologyTermSubgraphPathParams
	QueryParams GetOntologyTermSubgraphQueryParams
}

type GetOntologyTermSubgraphResponse struct {
	ContentType string
	StatusCode  int64
}
