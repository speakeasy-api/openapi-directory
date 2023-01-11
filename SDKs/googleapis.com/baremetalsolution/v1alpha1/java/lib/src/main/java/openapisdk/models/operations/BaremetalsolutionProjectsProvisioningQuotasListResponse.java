package openapisdk.models.operations;



public class BaremetalsolutionProjectsProvisioningQuotasListResponse {
    public String contentType;
    public BaremetalsolutionProjectsProvisioningQuotasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProvisioningQuotasResponse listProvisioningQuotasResponse;
    public BaremetalsolutionProjectsProvisioningQuotasListResponse withListProvisioningQuotasResponse(openapisdk.models.shared.ListProvisioningQuotasResponse listProvisioningQuotasResponse) {
        this.listProvisioningQuotasResponse = listProvisioningQuotasResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsProvisioningQuotasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}