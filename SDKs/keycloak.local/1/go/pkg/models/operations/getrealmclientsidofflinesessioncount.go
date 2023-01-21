package operations

type GetRealmClientsIDOfflineSessionCountPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDOfflineSessionCountRequest struct {
	PathParams GetRealmClientsIDOfflineSessionCountPathParams
}

type GetRealmClientsIDOfflineSessionCountResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetRealmClientsIDOfflineSessionCount2XXApplicationJSONObject map[string]interface{}
}
