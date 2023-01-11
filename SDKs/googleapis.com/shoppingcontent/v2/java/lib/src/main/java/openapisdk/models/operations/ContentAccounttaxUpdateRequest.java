package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccounttaxUpdateRequest {
    public ContentAccounttaxUpdatePathParams pathParams;
    public ContentAccounttaxUpdateRequest withPathParams(ContentAccounttaxUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccounttaxUpdateQueryParams queryParams;
    public ContentAccounttaxUpdateRequest withQueryParams(ContentAccounttaxUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountTax request;
    public ContentAccounttaxUpdateRequest withRequest(openapisdk.models.shared.AccountTax request) {
        this.request = request;
        return this;
    }
    public ContentAccounttaxUpdateSecurity security;
    public ContentAccounttaxUpdateRequest withSecurity(ContentAccounttaxUpdateSecurity security) {
        this.security = security;
        return this;
    }
}