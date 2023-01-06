package operations

import (
	"openapi/pkg/models/shared"
)

type PostGraphQlRequest struct {
	Request shared.GraphQlRequest `request:"mediaType=application/json"`
}

type PostGraphQlResponse struct {
	ContentType     string
	GraphQLResponse *shared.GraphQlResponse
	StatusCode      int64
}
