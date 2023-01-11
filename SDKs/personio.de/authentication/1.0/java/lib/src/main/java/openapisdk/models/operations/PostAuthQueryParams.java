package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client_id")
    public String clientId;
    public PostAuthQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client_secret")
    public String clientSecret;
    public PostAuthQueryParams withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
}