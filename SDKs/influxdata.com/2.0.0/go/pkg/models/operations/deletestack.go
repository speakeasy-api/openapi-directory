package operations

type DeleteStackPathParams struct {
	StackID string `pathParam:"style=simple,explode=false,name=stack_id"`
}

type DeleteStackQueryParams struct {
	OrgID string `queryParam:"style=form,explode=true,name=orgID"`
}

type DeleteStackRequest struct {
	PathParams  DeleteStackPathParams
	QueryParams DeleteStackQueryParams
}

type DeleteStackResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
