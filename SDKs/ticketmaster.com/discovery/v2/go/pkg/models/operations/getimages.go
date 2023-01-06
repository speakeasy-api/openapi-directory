package operations

type GetImagesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetImagesIncludeLicensedContentEnum string

const (
	GetImagesIncludeLicensedContentEnumYes GetImagesIncludeLicensedContentEnum = "yes"
	GetImagesIncludeLicensedContentEnumNo  GetImagesIncludeLicensedContentEnum = " no"
)

type GetImagesQueryParams struct {
	IncludeLicensedContent *GetImagesIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                              `queryParam:"style=form,explode=true,name=locale"`
}

type GetImagesRequest struct {
	PathParams  GetImagesPathParams
	QueryParams GetImagesQueryParams
}

type GetImagesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
