package operations

type GetEstimateListPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetEstimateListRequest struct {
	PathParams GetEstimateListPathParams
}

type GetEstimateListResponse struct {
	Body                 []byte
	ContentType          string
	EstimateListExpandVO *interface{}
	HTTPStatusVO         *interface{}
	StatusCode           int64
}
