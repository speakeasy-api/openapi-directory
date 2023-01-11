package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentShippingsettingsCustombatchRequest {
    public ContentShippingsettingsCustombatchQueryParams queryParams;
    public ContentShippingsettingsCustombatchRequest withQueryParams(ContentShippingsettingsCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShippingsettingsCustomBatchRequest request;
    public ContentShippingsettingsCustombatchRequest withRequest(openapisdk.models.shared.ShippingsettingsCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentShippingsettingsCustombatchSecurity security;
    public ContentShippingsettingsCustombatchRequest withSecurity(ContentShippingsettingsCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}