package openapisdk.models.operations;



public class TpuProjectsLocationsGenerateServiceIdentityResponse {
    public String contentType;
    public TpuProjectsLocationsGenerateServiceIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateServiceIdentityResponse generateServiceIdentityResponse;
    public TpuProjectsLocationsGenerateServiceIdentityResponse withGenerateServiceIdentityResponse(openapisdk.models.shared.GenerateServiceIdentityResponse generateServiceIdentityResponse) {
        this.generateServiceIdentityResponse = generateServiceIdentityResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsGenerateServiceIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}