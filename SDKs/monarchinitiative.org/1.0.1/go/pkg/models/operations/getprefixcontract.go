package operations

type GetPrefixContractPathParams struct {
	URI string `pathParam:"style=simple,explode=false,name=uri"`
}

type GetPrefixContractRequest struct {
	PathParams GetPrefixContractPathParams
}

type GetPrefixContractResponse struct {
	ContentType string
	StatusCode  int64
}
