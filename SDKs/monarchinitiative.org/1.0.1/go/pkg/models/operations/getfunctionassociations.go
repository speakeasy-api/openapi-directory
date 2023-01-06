package operations

type GetFunctionAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFunctionAssociationsQueryParams struct {
	Evidence []string `queryParam:"style=form,explode=true,name=evidence"`
	Rows     *int64   `queryParam:"style=form,explode=true,name=rows"`
	Start    *int64   `queryParam:"style=form,explode=true,name=start"`
}

type GetFunctionAssociationsRequest struct {
	PathParams  GetFunctionAssociationsPathParams
	QueryParams GetFunctionAssociationsQueryParams
}

type GetFunctionAssociationsResponse struct {
	ContentType string
	StatusCode  int64
}
