package operations

type GetFunctionTaxonAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFunctionTaxonAssociationsQueryParams struct {
	Evidence []string `queryParam:"style=form,explode=true,name=evidence"`
	Rows     *int64   `queryParam:"style=form,explode=true,name=rows"`
	Start    *int64   `queryParam:"style=form,explode=true,name=start"`
}

type GetFunctionTaxonAssociationsRequest struct {
	PathParams  GetFunctionTaxonAssociationsPathParams
	QueryParams GetFunctionTaxonAssociationsQueryParams
}

type GetFunctionTaxonAssociationsResponse struct {
	ContentType string
	StatusCode  int64
}
