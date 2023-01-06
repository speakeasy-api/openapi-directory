package shared

type RefreshTokenGrantTypeEnum string

const (
	RefreshTokenGrantTypeEnumRefreshToken RefreshTokenGrantTypeEnum = "refresh_token"
)

type RefreshToken struct {
	ClientID     *string                    `form:"name=client_id"`
	ClientSecret *string                    `form:"name=client_secret"`
	GrantType    *RefreshTokenGrantTypeEnum `form:"name=grant_type"`
	RedirectURI  *string                    `form:"name=redirect_uri"`
	RefreshToken *string                    `form:"name=refresh_token"`
}
