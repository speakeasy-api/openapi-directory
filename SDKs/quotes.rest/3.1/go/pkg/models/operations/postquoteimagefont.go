package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteImageFontRequestBodyFont struct {
	Content []byte `multipartForm:"content"`
	Font    string `multipartForm:"name=font"`
}

type PostQuoteImageFontRequestBody struct {
	Font PostQuoteImageFontRequestBodyFont `multipartForm:"file"`
	Tags *string                           `multipartForm:"name=tags"`
}

type PostQuoteImageFontSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteImageFontRequest struct {
	Request  *PostQuoteImageFontRequestBody `request:"mediaType=multipart/form-data"`
	Security PostQuoteImageFontSecurity
}

type PostQuoteImageFontResponse struct {
	ContentType string
	StatusCode  int64
}
