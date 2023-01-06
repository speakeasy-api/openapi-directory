package operations

type DeleteVariantSetItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteVariantSetItemRequest struct {
	PathParams DeleteVariantSetItemPathParams
}

type DeleteVariantSetItemResponse struct {
	ContentType string
	StatusCode  int64
}
