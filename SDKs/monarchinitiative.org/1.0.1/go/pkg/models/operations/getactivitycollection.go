package operations

type GetActivityCollectionQueryParams struct {
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetActivityCollectionRequest struct {
	QueryParams GetActivityCollectionQueryParams
}

type GetActivityCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
