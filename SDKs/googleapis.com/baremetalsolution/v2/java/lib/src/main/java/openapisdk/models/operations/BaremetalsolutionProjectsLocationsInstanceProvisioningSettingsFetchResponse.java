package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchInstanceProvisioningSettingsResponse fetchInstanceProvisioningSettingsResponse;
    public BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse withFetchInstanceProvisioningSettingsResponse(openapisdk.models.shared.FetchInstanceProvisioningSettingsResponse fetchInstanceProvisioningSettingsResponse) {
        this.fetchInstanceProvisioningSettingsResponse = fetchInstanceProvisioningSettingsResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}