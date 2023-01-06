package operations

type GetResourcesMediaIDThumbnailJpgPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesMediaIDThumbnailJpgRequest struct {
	PathParams GetResourcesMediaIDThumbnailJpgPathParams
}

type GetResourcesMediaIDThumbnailJpgResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetResourcesMediaIDThumbnailJpg200ApplicationJSONObject map[string]interface{}
}
