package operations

import (
	"openapi/pkg/models/shared"
)

type GetQodLanguagesSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQodLanguagesRequest struct {
	Security GetQodLanguagesSecurity
}

type GetQodLanguagesResponse struct {
	ContentType string
	StatusCode  int64
}
