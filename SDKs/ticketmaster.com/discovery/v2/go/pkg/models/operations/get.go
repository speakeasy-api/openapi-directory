package operations

type GetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetIncludeLicensedContentEnum string

const (
	GetIncludeLicensedContentEnumYes GetIncludeLicensedContentEnum = "yes"
	GetIncludeLicensedContentEnumNo  GetIncludeLicensedContentEnum = " no"
)

type GetQueryParams struct {
	IncludeLicensedContent *GetIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                        `queryParam:"style=form,explode=true,name=locale"`
}

type GetRequest struct {
	PathParams  GetPathParams
	QueryParams GetQueryParams
}

type GetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
