package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccessTokenRequestBody struct {
	GrantType    string  `multipartForm:"name=grant_type"`
	Password     *string `multipartForm:"name=password"`
	RefreshToken *string `multipartForm:"name=refresh_token"`
	Scope        string  `multipartForm:"name=scope"`
	UserID       *int64  `multipartForm:"name=user_id"`
	Username     *string `multipartForm:"name=username"`
}

type GetAccessTokenSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetAccessTokenRequest struct {
	Request  *GetAccessTokenRequestBody `request:"mediaType=multipart/form-data"`
	Security GetAccessTokenSecurity
}

type GetAccessTokenResponse struct {
	ContentType string
	StatusCode  int64
	Token       *interface{}
	TokenError  *shared.TokenError
}
