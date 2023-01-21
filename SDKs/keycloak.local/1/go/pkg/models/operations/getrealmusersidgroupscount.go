package operations

type GetRealmUsersIDGroupsCountPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmUsersIDGroupsCountQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type GetRealmUsersIDGroupsCountRequest struct {
	PathParams  GetRealmUsersIDGroupsCountPathParams
	QueryParams GetRealmUsersIDGroupsCountQueryParams
}

type GetRealmUsersIDGroupsCountResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetRealmUsersIDGroupsCount2XXApplicationJSONObject map[string]interface{}
}
