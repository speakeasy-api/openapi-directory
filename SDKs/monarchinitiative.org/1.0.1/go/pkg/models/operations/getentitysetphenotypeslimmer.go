package operations

type GetEntitySetPhenotypeSlimmerQueryParams struct {
	ExcludeAutomaticAssertions *bool    `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Rows                       *int64   `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string `queryParam:"style=form,explode=true,name=slim"`
	Start                      *int64   `queryParam:"style=form,explode=true,name=start"`
	Subject                    []string `queryParam:"style=form,explode=true,name=subject"`
}

type GetEntitySetPhenotypeSlimmerRequest struct {
	QueryParams GetEntitySetPhenotypeSlimmerQueryParams
}

type GetEntitySetPhenotypeSlimmerResponse struct {
	ContentType string
	StatusCode  int64
}
