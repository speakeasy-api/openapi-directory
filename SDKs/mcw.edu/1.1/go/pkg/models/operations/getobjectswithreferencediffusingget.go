package operations

type GetObjectsWithReferenceDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectsWithReferenceDiffUsingGetRequest struct {
	PathParams GetObjectsWithReferenceDiffUsingGetPathParams
}

type GetObjectsWithReferenceDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
