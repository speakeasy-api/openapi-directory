package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentShippingsettingsUpdateRequest {
    public ContentShippingsettingsUpdatePathParams pathParams;
    public ContentShippingsettingsUpdateRequest withPathParams(ContentShippingsettingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentShippingsettingsUpdateQueryParams queryParams;
    public ContentShippingsettingsUpdateRequest withQueryParams(ContentShippingsettingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShippingSettings request;
    public ContentShippingsettingsUpdateRequest withRequest(openapisdk.models.shared.ShippingSettings request) {
        this.request = request;
        return this;
    }
    public ContentShippingsettingsUpdateSecurity security;
    public ContentShippingsettingsUpdateRequest withSecurity(ContentShippingsettingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}