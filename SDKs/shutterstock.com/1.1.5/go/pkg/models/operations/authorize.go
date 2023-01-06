package operations

type AuthorizeRealmEnum string

const (
	AuthorizeRealmEnumCustomer    AuthorizeRealmEnum = "customer"
	AuthorizeRealmEnumContributor AuthorizeRealmEnum = "contributor"
)

type AuthorizeResponseTypeEnum string

const (
	AuthorizeResponseTypeEnumCode AuthorizeResponseTypeEnum = "code"
)

type AuthorizeQueryParams struct {
	ClientID     string                    `queryParam:"style=form,explode=true,name=client_id"`
	Realm        *AuthorizeRealmEnum       `queryParam:"style=form,explode=true,name=realm"`
	RedirectURI  string                    `queryParam:"style=form,explode=true,name=redirect_uri"`
	ResponseType AuthorizeResponseTypeEnum `queryParam:"style=form,explode=true,name=response_type"`
	Scope        *string                   `queryParam:"style=form,explode=true,name=scope"`
	State        string                    `queryParam:"style=form,explode=true,name=state"`
}

type AuthorizeRequest struct {
	QueryParams AuthorizeQueryParams
}

type AuthorizeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
