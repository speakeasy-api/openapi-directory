package operations

type GetProteinInteractionDiffUsingGetPathParams struct {
	DateFromYYYYMMDD string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetProteinInteractionDiffUsingGetRequest struct {
	PathParams GetProteinInteractionDiffUsingGetPathParams
}

type GetProteinInteractionDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
