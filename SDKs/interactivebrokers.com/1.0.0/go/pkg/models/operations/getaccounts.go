package operations

type GetAccountsQueryParams struct {
	Account string `queryParam:"style=form,explode=true,name=account"`
}

type GetAccounts200ApplicationJSON struct {
	Accounts []string `json:"accounts,omitempty"`
}

type GetAccountsRequest struct {
	QueryParams GetAccountsQueryParams
}

type GetAccountsResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetAccounts200ApplicationJSONObject *GetAccounts200ApplicationJSON
}
