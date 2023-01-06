package operations

type GetRetiredObjectDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetRetiredObjectDiffUsingGetRequest struct {
	PathParams GetRetiredObjectDiffUsingGetPathParams
}

type GetRetiredObjectDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
