package operations

type GetOntologyTermPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOntologyTermRequest struct {
	PathParams GetOntologyTermPathParams
}

type GetOntologyTermResponse struct {
	ContentType string
	StatusCode  int64
}
