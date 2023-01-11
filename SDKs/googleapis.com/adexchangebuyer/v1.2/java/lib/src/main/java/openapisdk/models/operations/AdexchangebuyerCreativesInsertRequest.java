package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesInsertRequest {
    public AdexchangebuyerCreativesInsertQueryParams queryParams;
    public AdexchangebuyerCreativesInsertRequest withQueryParams(AdexchangebuyerCreativesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Creative request;
    public AdexchangebuyerCreativesInsertRequest withRequest(openapisdk.models.shared.Creative request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerCreativesInsertSecurity security;
    public AdexchangebuyerCreativesInsertRequest withSecurity(AdexchangebuyerCreativesInsertSecurity security) {
        this.security = security;
        return this;
    }
}