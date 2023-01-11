package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInappproductsInsertRequest {
    public AndroidpublisherInappproductsInsertPathParams pathParams;
    public AndroidpublisherInappproductsInsertRequest withPathParams(AndroidpublisherInappproductsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherInappproductsInsertQueryParams queryParams;
    public AndroidpublisherInappproductsInsertRequest withQueryParams(AndroidpublisherInappproductsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InAppProduct request;
    public AndroidpublisherInappproductsInsertRequest withRequest(openapisdk.models.shared.InAppProduct request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherInappproductsInsertSecurity security;
    public AndroidpublisherInappproductsInsertRequest withSecurity(AndroidpublisherInappproductsInsertSecurity security) {
        this.security = security;
        return this;
    }
}