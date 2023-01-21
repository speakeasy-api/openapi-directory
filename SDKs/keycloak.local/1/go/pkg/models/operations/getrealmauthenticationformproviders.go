package operations

type GetRealmAuthenticationFormProvidersPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationFormProvidersRequest struct {
	PathParams GetRealmAuthenticationFormProvidersPathParams
}

type GetRealmAuthenticationFormProvidersResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetRealmAuthenticationFormProviders2XXApplicationJSONObjects []map[string]interface{}
}
