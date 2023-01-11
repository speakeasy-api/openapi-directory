package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentLiasettingsUpdateRequest {
    public ContentLiasettingsUpdatePathParams pathParams;
    public ContentLiasettingsUpdateRequest withPathParams(ContentLiasettingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentLiasettingsUpdateQueryParams queryParams;
    public ContentLiasettingsUpdateRequest withQueryParams(ContentLiasettingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiaSettings request;
    public ContentLiasettingsUpdateRequest withRequest(openapisdk.models.shared.LiaSettings request) {
        this.request = request;
        return this;
    }
    public ContentLiasettingsUpdateSecurity security;
    public ContentLiasettingsUpdateRequest withSecurity(ContentLiasettingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}