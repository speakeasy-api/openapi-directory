package operations

type GetMartCaseAssociationsResourcePathParams struct {
	ObjectCategory string `pathParam:"style=simple,explode=false,name=object_category"`
	Taxon          string `pathParam:"style=simple,explode=false,name=taxon"`
}

type GetMartCaseAssociationsResourceQueryParams struct {
	Slim []string `queryParam:"style=form,explode=true,name=slim"`
}

type GetMartCaseAssociationsResourceRequest struct {
	PathParams  GetMartCaseAssociationsResourcePathParams
	QueryParams GetMartCaseAssociationsResourceQueryParams
}

type GetMartCaseAssociationsResourceResponse struct {
	ContentType string
	StatusCode  int64
}
