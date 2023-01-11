package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchConversionInsertRequest {
    public DoubleclicksearchConversionInsertQueryParams queryParams;
    public DoubleclicksearchConversionInsertRequest withQueryParams(DoubleclicksearchConversionInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConversionList request;
    public DoubleclicksearchConversionInsertRequest withRequest(openapisdk.models.shared.ConversionList request) {
        this.request = request;
        return this;
    }
    public DoubleclicksearchConversionInsertSecurity security;
    public DoubleclicksearchConversionInsertRequest withSecurity(DoubleclicksearchConversionInsertSecurity security) {
        this.security = security;
        return this;
    }
}