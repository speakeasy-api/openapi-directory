package operations

type GetRealmUsersIDConsentsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmUsersIDConsentsRequest struct {
	PathParams GetRealmUsersIDConsentsPathParams
}

type GetRealmUsersIDConsentsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetRealmUsersIDConsents2XXApplicationJSONObjects []map[string]interface{}
}
