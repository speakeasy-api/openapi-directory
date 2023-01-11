package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountryBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public CountryBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public CountryBatchSecurity security;
    public CountryBatchRequest withSecurity(CountryBatchSecurity security) {
        this.security = security;
        return this;
    }
}