package operations

type GetOntologySubsetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOntologySubsetRequest struct {
	PathParams GetOntologySubsetPathParams
}

type GetOntologySubsetResponse struct {
	ContentType string
	StatusCode  int64
}
