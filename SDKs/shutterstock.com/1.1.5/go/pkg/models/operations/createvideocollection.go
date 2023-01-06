package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVideoCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type CreateVideoCollectionRequest struct {
	Request  shared.CollectionCreateRequest `request:"mediaType=application/json"`
	Security CreateVideoCollectionSecurity
}

type CreateVideoCollectionResponse struct {
	CollectionCreateResponse *shared.CollectionCreateResponse
	ContentType              string
	StatusCode               int64
}
