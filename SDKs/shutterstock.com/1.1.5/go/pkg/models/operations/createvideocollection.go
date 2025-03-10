// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreateVideoCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type CreateVideoCollectionRequest struct {
	// Collection metadata
	Request  shared.CollectionCreateRequest `request:"mediaType=application/json"`
	Security CreateVideoCollectionSecurity
}

type CreateVideoCollectionResponse struct {
	// Successfully created video collection
	CollectionCreateResponse *shared.CollectionCreateResponse
	ContentType              string
	StatusCode               int
	RawResponse              *http.Response
}
