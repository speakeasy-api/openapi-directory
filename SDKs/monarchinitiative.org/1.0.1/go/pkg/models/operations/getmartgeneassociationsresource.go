package operations

type GetMartGeneAssociationsResourcePathParams struct {
	ObjectCategory string `pathParam:"style=simple,explode=false,name=object_category"`
	Taxon          string `pathParam:"style=simple,explode=false,name=taxon"`
}

type GetMartGeneAssociationsResourceQueryParams struct {
	Slim []string `queryParam:"style=form,explode=true,name=slim"`
}

type GetMartGeneAssociationsResourceRequest struct {
	PathParams  GetMartGeneAssociationsResourcePathParams
	QueryParams GetMartGeneAssociationsResourceQueryParams
}

type GetMartGeneAssociationsResourceResponse struct {
	ContentType string
	StatusCode  int64
}
