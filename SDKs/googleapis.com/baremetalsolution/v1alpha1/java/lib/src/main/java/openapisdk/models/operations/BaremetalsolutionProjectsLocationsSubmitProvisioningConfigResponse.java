package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProvisioningConfig provisioningConfig;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse withProvisioningConfig(openapisdk.models.shared.ProvisioningConfig provisioningConfig) {
        this.provisioningConfig = provisioningConfig;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}