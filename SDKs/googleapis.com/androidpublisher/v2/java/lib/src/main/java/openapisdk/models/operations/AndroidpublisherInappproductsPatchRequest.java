package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsPatchRequest {
    public AndroidpublisherInappproductsPatchPathParams pathParams;
    public AndroidpublisherInappproductsPatchRequest withPathParams(AndroidpublisherInappproductsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherInappproductsPatchQueryParams queryParams;
    public AndroidpublisherInappproductsPatchRequest withQueryParams(AndroidpublisherInappproductsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InAppProduct request;
    public AndroidpublisherInappproductsPatchRequest withRequest(openapisdk.models.shared.InAppProduct request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherInappproductsPatchSecurity security;
    public AndroidpublisherInappproductsPatchRequest withSecurity(AndroidpublisherInappproductsPatchSecurity security) {
        this.security = security;
        return this;
    }
}