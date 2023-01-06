package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type CreateImageCollectionRequest struct {
	Request  shared.CollectionCreateRequest `request:"mediaType=application/json"`
	Security CreateImageCollectionSecurity
}

type CreateImageCollectionResponse struct {
	CollectionCreateResponse *shared.CollectionCreateResponse
	ContentType              string
	StatusCode               int64
}
