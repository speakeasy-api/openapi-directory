package operations

type GetStrainTypeDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetStrainTypeDiffUsingGetRequest struct {
	PathParams GetStrainTypeDiffUsingGetPathParams
}

type GetStrainTypeDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
