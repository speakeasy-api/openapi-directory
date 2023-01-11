package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client_id")
    public String clientId;
    public GetConnectQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirect_uri")
    public String redirectUri;
    public GetConnectQueryParams withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_type")
    public openapisdk.models.shared.ResponseTypeEnum responseType;
    public GetConnectQueryParams withResponseType(openapisdk.models.shared.ResponseTypeEnum responseType) {
        this.responseType = responseType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scope")
    public String scope;
    public GetConnectQueryParams withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetConnectQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}