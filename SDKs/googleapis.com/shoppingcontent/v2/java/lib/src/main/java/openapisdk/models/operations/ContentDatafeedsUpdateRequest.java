package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedsUpdateRequest {
    public ContentDatafeedsUpdatePathParams pathParams;
    public ContentDatafeedsUpdateRequest withPathParams(ContentDatafeedsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentDatafeedsUpdateQueryParams queryParams;
    public ContentDatafeedsUpdateRequest withQueryParams(ContentDatafeedsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Datafeed request;
    public ContentDatafeedsUpdateRequest withRequest(openapisdk.models.shared.Datafeed request) {
        this.request = request;
        return this;
    }
    public ContentDatafeedsUpdateSecurity security;
    public ContentDatafeedsUpdateRequest withSecurity(ContentDatafeedsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}