package operations

type GetOntologyTermSubsetsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOntologyTermSubsetsRequest struct {
	PathParams GetOntologyTermSubsetsPathParams
}

type GetOntologyTermSubsetsResponse struct {
	ContentType string
	StatusCode  int64
}
