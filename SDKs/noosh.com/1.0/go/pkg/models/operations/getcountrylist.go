package operations

type GetCountryListResponse struct {
	Body          []byte
	ContentType   string
	CountryListVO *interface{}
	HTTPStatusVO  *interface{}
	StatusCode    int64
}
