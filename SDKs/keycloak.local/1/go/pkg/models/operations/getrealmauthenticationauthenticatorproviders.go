package operations

type GetRealmAuthenticationAuthenticatorProvidersPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationAuthenticatorProvidersRequest struct {
	PathParams GetRealmAuthenticationAuthenticatorProvidersPathParams
}

type GetRealmAuthenticationAuthenticatorProvidersResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetRealmAuthenticationAuthenticatorProviders2XXApplicationJSONObjects []map[string]interface{}
}
