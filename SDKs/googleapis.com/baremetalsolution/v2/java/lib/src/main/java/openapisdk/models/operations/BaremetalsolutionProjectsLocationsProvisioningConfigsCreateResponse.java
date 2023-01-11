package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProvisioningConfig provisioningConfig;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse withProvisioningConfig(openapisdk.models.shared.ProvisioningConfig provisioningConfig) {
        this.provisioningConfig = provisioningConfig;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}