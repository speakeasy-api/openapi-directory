package operations

type GetFunctionPublicationAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFunctionPublicationAssociationsQueryParams struct {
	Evidence []string `queryParam:"style=form,explode=true,name=evidence"`
	Rows     *int64   `queryParam:"style=form,explode=true,name=rows"`
	Start    *int64   `queryParam:"style=form,explode=true,name=start"`
}

type GetFunctionPublicationAssociationsRequest struct {
	PathParams  GetFunctionPublicationAssociationsPathParams
	QueryParams GetFunctionPublicationAssociationsQueryParams
}

type GetFunctionPublicationAssociationsResponse struct {
	ContentType string
	StatusCode  int64
}
