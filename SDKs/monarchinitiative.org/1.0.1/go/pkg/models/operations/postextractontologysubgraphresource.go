package operations

type PostExtractOntologySubgraphResourcePathParams struct {
	Node     string `pathParam:"style=simple,explode=false,name=node"`
	Ontology string `pathParam:"style=simple,explode=false,name=ontology"`
}

type PostExtractOntologySubgraphResourceQueryParams struct {
	Cnode              []string `queryParam:"style=form,explode=true,name=cnode"`
	IncludeAncestors   *bool    `queryParam:"style=form,explode=true,name=include_ancestors"`
	IncludeDescendants *bool    `queryParam:"style=form,explode=true,name=include_descendants"`
	IncludeMeta        *bool    `queryParam:"style=form,explode=true,name=include_meta"`
	Relation           []string `queryParam:"style=form,explode=true,name=relation"`
}

type PostExtractOntologySubgraphResourceRequest struct {
	PathParams  PostExtractOntologySubgraphResourcePathParams
	QueryParams PostExtractOntologySubgraphResourceQueryParams
}

type PostExtractOntologySubgraphResourceResponse struct {
	ContentType string
	StatusCode  int64
}
