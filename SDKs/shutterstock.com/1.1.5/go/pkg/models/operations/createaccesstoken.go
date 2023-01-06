package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccessTokenApplicationJSONGrantTypeEnum string

const (
	CreateAccessTokenApplicationJSONGrantTypeEnumAuthorizationCode CreateAccessTokenApplicationJSONGrantTypeEnum = "authorization_code"
	CreateAccessTokenApplicationJSONGrantTypeEnumClientCredentials CreateAccessTokenApplicationJSONGrantTypeEnum = "client_credentials"
	CreateAccessTokenApplicationJSONGrantTypeEnumRefreshToken      CreateAccessTokenApplicationJSONGrantTypeEnum = "refresh_token"
)

type CreateAccessTokenApplicationJSONRealmEnum string

const (
	CreateAccessTokenApplicationJSONRealmEnumCustomer    CreateAccessTokenApplicationJSONRealmEnum = "customer"
	CreateAccessTokenApplicationJSONRealmEnumContributor CreateAccessTokenApplicationJSONRealmEnum = "contributor"
)

type CreateAccessTokenApplicationJSON struct {
	ClientID     string                                        `json:"client_id"`
	ClientSecret *string                                       `json:"client_secret,omitempty"`
	Code         *string                                       `json:"code,omitempty"`
	Expires      *bool                                         `json:"expires,omitempty"`
	GrantType    CreateAccessTokenApplicationJSONGrantTypeEnum `json:"grant_type"`
	Realm        *CreateAccessTokenApplicationJSONRealmEnum    `json:"realm,omitempty"`
	RefreshToken *string                                       `json:"refresh_token,omitempty"`
}

type CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum string

const (
	CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnumTrue  CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum = "true"
	CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnumFalse CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum = "false"
)

type CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum string

const (
	CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnumAuthorizationCode CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = "authorization_code"
	CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnumClientCredentials CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = "client_credentials"
	CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnumRefreshToken      CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = "refresh_token"
)

type CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum string

const (
	CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnumCustomer    CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum = "customer"
	CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnumContributor CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum = "contributor"
)

type CreateAccessTokenApplicationXWwwFormUrlencoded struct {
	ClientID     string                                                      `form:"name=client_id"`
	ClientSecret *string                                                     `form:"name=client_secret"`
	Code         *string                                                     `form:"name=code"`
	Expires      *CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum  `form:"name=expires"`
	GrantType    CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum `form:"name=grant_type"`
	Realm        *CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum    `form:"name=realm"`
	RefreshToken *string                                                     `form:"name=refresh_token"`
}

type CreateAccessTokenRequests struct {
	Object  *CreateAccessTokenApplicationJSON               `request:"mediaType=application/json"`
	Object1 *CreateAccessTokenApplicationXWwwFormUrlencoded `request:"mediaType=application/x-www-form-urlencoded"`
}

type CreateAccessTokenRequest struct {
	Request *CreateAccessTokenRequests
}

type CreateAccessTokenResponse struct {
	ContentType              string
	OauthAccessTokenResponse *shared.OauthAccessTokenResponse
	StatusCode               int64
}
