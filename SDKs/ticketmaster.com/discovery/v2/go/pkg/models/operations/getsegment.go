package operations

type GetSegmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSegmentIncludeLicensedContentEnum string

const (
	GetSegmentIncludeLicensedContentEnumYes GetSegmentIncludeLicensedContentEnum = "yes"
	GetSegmentIncludeLicensedContentEnumNo  GetSegmentIncludeLicensedContentEnum = " no"
)

type GetSegmentQueryParams struct {
	IncludeLicensedContent *GetSegmentIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                               `queryParam:"style=form,explode=true,name=locale"`
}

type GetSegmentRequest struct {
	PathParams  GetSegmentPathParams
	QueryParams GetSegmentQueryParams
}

type GetSegmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
