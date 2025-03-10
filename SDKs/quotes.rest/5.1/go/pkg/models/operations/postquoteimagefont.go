// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type PostQuoteImageFontSecurity struct {
	BearerAuth string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

type PostQuoteImageFontRequestBodyFont struct {
	Content []byte `multipartForm:"content"`
	Font    string `multipartForm:"name=font"`
}

type PostQuoteImageFontRequestBody struct {
	// Font file to add to your collection (ttf/otf are supported)
	Font PostQuoteImageFontRequestBodyFont `multipartForm:"file"`
	// Optional comma separated tags
	Tags *string `multipartForm:"name=tags"`
}

type PostQuoteImageFontResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
