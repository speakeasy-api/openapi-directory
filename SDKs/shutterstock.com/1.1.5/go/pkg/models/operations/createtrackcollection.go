package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTrackCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type CreateTrackCollectionRequest struct {
	Request  shared.CollectionCreateRequest `request:"mediaType=application/json"`
	Security CreateTrackCollectionSecurity
}

type CreateTrackCollectionResponse struct {
	CollectionCreateResponse *shared.CollectionCreateResponse
	ContentType              string
	StatusCode               int64
}
