package operations

type ShortenLinkQueryParams struct {
	Cta int64  `queryParam:"style=form,explode=true,name=cta"`
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type ShortenLinkRequest struct {
	QueryParams ShortenLinkQueryParams
}

type ShortenLinkResponse struct {
	ContentType string
	StatusCode  int64
}
