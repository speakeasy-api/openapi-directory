package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client_id")
    public String clientId;
    public AuthorizeQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=realm")
    public AuthorizeRealmEnum realm;
    public AuthorizeQueryParams withRealm(AuthorizeRealmEnum realm) {
        this.realm = realm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirect_uri")
    public String redirectUri;
    public AuthorizeQueryParams withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_type")
    public AuthorizeResponseTypeEnum responseType;
    public AuthorizeQueryParams withResponseType(AuthorizeResponseTypeEnum responseType) {
        this.responseType = responseType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scope")
    public String scope;
    public AuthorizeQueryParams withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public AuthorizeQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}