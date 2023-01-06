package operations

type GetWithdrawnObjectCountUsingGetPathParams struct {
	DateYYYYMMDD   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetWithdrawnObjectCountUsingGetRequest struct {
	PathParams GetWithdrawnObjectCountUsingGetPathParams
}

type GetWithdrawnObjectCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
