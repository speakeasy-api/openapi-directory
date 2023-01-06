package operations

type GetQtlInheritanceTypeDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetQtlInheritanceTypeDiffUsingGetRequest struct {
	PathParams GetQtlInheritanceTypeDiffUsingGetPathParams
}

type GetQtlInheritanceTypeDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
