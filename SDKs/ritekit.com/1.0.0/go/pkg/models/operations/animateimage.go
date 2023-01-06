package operations

type AnimateImageQueryParams struct {
	Type string `queryParam:"style=form,explode=true,name=type"`
	URL  string `queryParam:"style=form,explode=true,name=url"`
}

type AnimateImageRequest struct {
	QueryParams AnimateImageQueryParams
}

type AnimateImageResponse struct {
	ContentType string
	StatusCode  int64
}
