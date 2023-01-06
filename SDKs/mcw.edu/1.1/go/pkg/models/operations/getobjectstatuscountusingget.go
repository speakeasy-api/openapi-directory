package operations

type GetObjectStatusCountUsingGetPathParams struct {
	DateYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectStatusCountUsingGetRequest struct {
	PathParams GetObjectStatusCountUsingGetPathParams
}

type GetObjectStatusCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
