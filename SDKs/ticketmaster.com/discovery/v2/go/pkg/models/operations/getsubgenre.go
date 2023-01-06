package operations

type GetSubgenrePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSubgenreIncludeLicensedContentEnum string

const (
	GetSubgenreIncludeLicensedContentEnumYes GetSubgenreIncludeLicensedContentEnum = "yes"
	GetSubgenreIncludeLicensedContentEnumNo  GetSubgenreIncludeLicensedContentEnum = " no"
)

type GetSubgenreQueryParams struct {
	IncludeLicensedContent *GetSubgenreIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                                `queryParam:"style=form,explode=true,name=locale"`
}

type GetSubgenreRequest struct {
	PathParams  GetSubgenrePathParams
	QueryParams GetSubgenreQueryParams
}

type GetSubgenreResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
