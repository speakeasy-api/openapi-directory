package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsUpdateRequest {
    public AndroidpublisherInappproductsUpdatePathParams pathParams;
    public AndroidpublisherInappproductsUpdateRequest withPathParams(AndroidpublisherInappproductsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherInappproductsUpdateQueryParams queryParams;
    public AndroidpublisherInappproductsUpdateRequest withQueryParams(AndroidpublisherInappproductsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InAppProduct request;
    public AndroidpublisherInappproductsUpdateRequest withRequest(openapisdk.models.shared.InAppProduct request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherInappproductsUpdateSecurity security;
    public AndroidpublisherInappproductsUpdateRequest withSecurity(AndroidpublisherInappproductsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}