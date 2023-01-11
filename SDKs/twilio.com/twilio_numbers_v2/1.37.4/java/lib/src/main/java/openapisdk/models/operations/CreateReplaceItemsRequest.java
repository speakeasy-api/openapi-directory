package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplaceItemsRequest {
    public String serverURL;
    public CreateReplaceItemsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateReplaceItemsPathParams pathParams;
    public CreateReplaceItemsRequest withPathParams(CreateReplaceItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateReplaceItemsCreateReplaceItemsRequest request;
    public CreateReplaceItemsRequest withRequest(CreateReplaceItemsCreateReplaceItemsRequest request) {
        this.request = request;
        return this;
    }
    public CreateReplaceItemsSecurity security;
    public CreateReplaceItemsRequest withSecurity(CreateReplaceItemsSecurity security) {
        this.security = security;
        return this;
    }
}