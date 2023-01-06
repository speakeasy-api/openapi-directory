package shared

type PasswordGrantTypeEnum string

const (
	PasswordGrantTypeEnumPassword PasswordGrantTypeEnum = "password"
)

type Password struct {
	ClientID     *string                `form:"name=client_id"`
	ClientSecret *string                `form:"name=client_secret"`
	GrantType    *PasswordGrantTypeEnum `form:"name=grant_type"`
	Password     *string                `form:"name=password"`
	RedirectURI  *string                `form:"name=redirect_uri"`
	UserName     *string                `form:"name=user_name"`
}
