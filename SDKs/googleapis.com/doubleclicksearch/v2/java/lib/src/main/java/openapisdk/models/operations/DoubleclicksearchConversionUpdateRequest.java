package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchConversionUpdateRequest {
    public DoubleclicksearchConversionUpdateQueryParams queryParams;
    public DoubleclicksearchConversionUpdateRequest withQueryParams(DoubleclicksearchConversionUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConversionList request;
    public DoubleclicksearchConversionUpdateRequest withRequest(openapisdk.models.shared.ConversionList request) {
        this.request = request;
        return this;
    }
    public DoubleclicksearchConversionUpdateSecurity security;
    public DoubleclicksearchConversionUpdateRequest withSecurity(DoubleclicksearchConversionUpdateSecurity security) {
        this.security = security;
        return this;
    }
}