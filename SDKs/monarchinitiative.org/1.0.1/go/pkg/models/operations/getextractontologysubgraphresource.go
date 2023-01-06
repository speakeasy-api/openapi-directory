package operations

type GetExtractOntologySubgraphResourcePathParams struct {
	Node     string `pathParam:"style=simple,explode=false,name=node"`
	Ontology string `pathParam:"style=simple,explode=false,name=ontology"`
}

type GetExtractOntologySubgraphResourceQueryParams struct {
	Cnode              []string `queryParam:"style=form,explode=true,name=cnode"`
	IncludeAncestors   *bool    `queryParam:"style=form,explode=true,name=include_ancestors"`
	IncludeDescendants *bool    `queryParam:"style=form,explode=true,name=include_descendants"`
	IncludeMeta        *bool    `queryParam:"style=form,explode=true,name=include_meta"`
	Relation           []string `queryParam:"style=form,explode=true,name=relation"`
}

type GetExtractOntologySubgraphResourceRequest struct {
	PathParams  GetExtractOntologySubgraphResourcePathParams
	QueryParams GetExtractOntologySubgraphResourceQueryParams
}

type GetExtractOntologySubgraphResourceResponse struct {
	ContentType string
	StatusCode  int64
}
