package openapisdk.models.operations;



public class PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse {
    public String contentType;
    public PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}