package operations

type GetRealmAuthenticationUnregisteredRequiredActionsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationUnregisteredRequiredActionsRequest struct {
	PathParams GetRealmAuthenticationUnregisteredRequiredActionsPathParams
}

type GetRealmAuthenticationUnregisteredRequiredActionsResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int64
	GetRealmAuthenticationUnregisteredRequiredActions2XXApplicationJSONObjects []map[string]interface{}
}
