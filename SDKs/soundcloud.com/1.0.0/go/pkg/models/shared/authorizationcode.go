package shared

type AuthorizationCodeGrantTypeEnum string

const (
	AuthorizationCodeGrantTypeEnumAuthorizationCode AuthorizationCodeGrantTypeEnum = "authorization_code"
	AuthorizationCodeGrantTypeEnumClientCredentials AuthorizationCodeGrantTypeEnum = "client_credentials"
)

type AuthorizationCode struct {
	AuthorizationCode *string                         `form:"name=authorization_code"`
	ClientID          *string                         `form:"name=client_id"`
	ClientSecret      *string                         `form:"name=client_secret"`
	GrantType         *AuthorizationCodeGrantTypeEnum `form:"name=grant_type"`
	RedirectURI       *string                         `form:"name=redirect_uri"`
}
