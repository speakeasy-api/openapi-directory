// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type EmojiSuggestionsRequest struct {
	// Text of the post
	Text string `queryParam:"style=form,explode=true,name=text"`
}

type EmojiSuggestionsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
