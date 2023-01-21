package operations

type GetRealmAuthenticationFormActionProvidersPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationFormActionProvidersRequest struct {
	PathParams GetRealmAuthenticationFormActionProvidersPathParams
}

type GetRealmAuthenticationFormActionProvidersResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	GetRealmAuthenticationFormActionProviders2XXApplicationJSONObjects []map[string]interface{}
}
