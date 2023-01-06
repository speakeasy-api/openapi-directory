package operations

type GetPhysicalInteractionQueryParams struct {
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetPhysicalInteractionRequest struct {
	QueryParams GetPhysicalInteractionQueryParams
}

type GetPhysicalInteractionResponse struct {
	ContentType string
	StatusCode  int64
}
