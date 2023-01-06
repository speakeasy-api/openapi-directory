package operations

type GetGeneTypeDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetGeneTypeDiffUsingGetRequest struct {
	PathParams GetGeneTypeDiffUsingGetPathParams
}

type GetGeneTypeDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
