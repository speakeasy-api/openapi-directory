package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedsInsertRequest {
    public ContentDatafeedsInsertPathParams pathParams;
    public ContentDatafeedsInsertRequest withPathParams(ContentDatafeedsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentDatafeedsInsertQueryParams queryParams;
    public ContentDatafeedsInsertRequest withQueryParams(ContentDatafeedsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Datafeed request;
    public ContentDatafeedsInsertRequest withRequest(openapisdk.models.shared.Datafeed request) {
        this.request = request;
        return this;
    }
    public ContentDatafeedsInsertSecurity security;
    public ContentDatafeedsInsertRequest withSecurity(ContentDatafeedsInsertSecurity security) {
        this.security = security;
        return this;
    }
}