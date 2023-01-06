package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteImageBackgroundRequestBodyImage struct {
	Content []byte `multipartForm:"content"`
	Image   string `multipartForm:"name=image"`
}

type PostQuoteImageBackgroundRequestBody struct {
	Image PostQuoteImageBackgroundRequestBodyImage `multipartForm:"file"`
	Tags  *string                                  `multipartForm:"name=tags"`
}

type PostQuoteImageBackgroundSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteImageBackgroundRequest struct {
	Request  *PostQuoteImageBackgroundRequestBody `request:"mediaType=multipart/form-data"`
	Security PostQuoteImageBackgroundSecurity
}

type PostQuoteImageBackgroundResponse struct {
	ContentType string
	StatusCode  int64
}
