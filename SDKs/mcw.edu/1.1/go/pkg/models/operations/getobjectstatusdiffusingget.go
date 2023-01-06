package operations

type GetObjectStatusDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectStatusDiffUsingGetRequest struct {
	PathParams GetObjectStatusDiffUsingGetPathParams
}

type GetObjectStatusDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
