package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProvisioningQuotasResponse listProvisioningQuotasResponse;
    public BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse withListProvisioningQuotasResponse(openapisdk.models.shared.ListProvisioningQuotasResponse listProvisioningQuotasResponse) {
        this.listProvisioningQuotasResponse = listProvisioningQuotasResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}