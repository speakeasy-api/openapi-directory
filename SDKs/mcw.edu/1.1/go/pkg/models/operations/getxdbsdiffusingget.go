package operations

type GetXdbsDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetXdbsDiffUsingGetRequest struct {
	PathParams GetXdbsDiffUsingGetPathParams
}

type GetXdbsDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
