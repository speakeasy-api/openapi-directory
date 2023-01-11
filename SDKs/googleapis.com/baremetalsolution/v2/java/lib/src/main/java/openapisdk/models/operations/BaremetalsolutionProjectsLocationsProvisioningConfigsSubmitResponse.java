package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitProvisioningConfigResponse submitProvisioningConfigResponse;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse withSubmitProvisioningConfigResponse(openapisdk.models.shared.SubmitProvisioningConfigResponse submitProvisioningConfigResponse) {
        this.submitProvisioningConfigResponse = submitProvisioningConfigResponse;
        return this;
    }
}