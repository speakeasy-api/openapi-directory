package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchConversionUpdateAvailabilityRequest {
    public DoubleclicksearchConversionUpdateAvailabilityQueryParams queryParams;
    public DoubleclicksearchConversionUpdateAvailabilityRequest withQueryParams(DoubleclicksearchConversionUpdateAvailabilityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAvailabilityRequest request;
    public DoubleclicksearchConversionUpdateAvailabilityRequest withRequest(openapisdk.models.shared.UpdateAvailabilityRequest request) {
        this.request = request;
        return this;
    }
    public DoubleclicksearchConversionUpdateAvailabilitySecurity security;
    public DoubleclicksearchConversionUpdateAvailabilityRequest withSecurity(DoubleclicksearchConversionUpdateAvailabilitySecurity security) {
        this.security = security;
        return this;
    }
}