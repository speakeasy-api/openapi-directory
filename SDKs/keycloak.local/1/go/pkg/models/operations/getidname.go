package operations

type GetIDNamePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetIDNameRequest struct {
	PathParams GetIDNamePathParams
}

type GetIDNameResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetIDName2XXApplicationJSONObject map[string]interface{}
}
