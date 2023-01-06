package operations

type GetGenrePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGenreIncludeLicensedContentEnum string

const (
	GetGenreIncludeLicensedContentEnumYes GetGenreIncludeLicensedContentEnum = "yes"
	GetGenreIncludeLicensedContentEnumNo  GetGenreIncludeLicensedContentEnum = " no"
)

type GetGenreQueryParams struct {
	IncludeLicensedContent *GetGenreIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                             `queryParam:"style=form,explode=true,name=locale"`
}

type GetGenreRequest struct {
	PathParams  GetGenrePathParams
	QueryParams GetGenreQueryParams
}

type GetGenreResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
