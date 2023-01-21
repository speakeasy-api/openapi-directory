package operations

type GetRealmCredentialRegistratorsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmCredentialRegistratorsRequest struct {
	PathParams GetRealmCredentialRegistratorsPathParams
}

type GetRealmCredentialRegistratorsResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetRealmCredentialRegistrators2XXApplicationJSONStrings []string
}
