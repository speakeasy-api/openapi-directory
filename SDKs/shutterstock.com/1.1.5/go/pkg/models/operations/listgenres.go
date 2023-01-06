package operations

import (
	"openapi/pkg/models/shared"
)

type ListGenresSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListGenresRequest struct {
	Security ListGenresSecurity
}

type ListGenresResponse struct {
	ContentType string
	GenreList   *shared.GenreList
	StatusCode  int64
}
