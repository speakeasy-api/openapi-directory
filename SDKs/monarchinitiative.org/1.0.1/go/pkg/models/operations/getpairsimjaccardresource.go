package operations

type GetPairSimJaccardResourcePathParams struct {
	Id1 string `pathParam:"style=simple,explode=false,name=id1"`
	Id2 string `pathParam:"style=simple,explode=false,name=id2"`
}

type GetPairSimJaccardResourceQueryParams struct {
	ObjectCategory *string `queryParam:"style=form,explode=true,name=object_category"`
}

type GetPairSimJaccardResourceRequest struct {
	PathParams  GetPairSimJaccardResourcePathParams
	QueryParams GetPairSimJaccardResourceQueryParams
}

type GetPairSimJaccardResourceResponse struct {
	ContentType string
	StatusCode  int64
}
