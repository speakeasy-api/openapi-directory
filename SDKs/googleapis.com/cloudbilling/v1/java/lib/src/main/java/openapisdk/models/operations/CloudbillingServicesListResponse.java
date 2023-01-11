package openapisdk.models.operations;



public class CloudbillingServicesListResponse {
    public String contentType;
    public CloudbillingServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServicesResponse listServicesResponse;
    public CloudbillingServicesListResponse withListServicesResponse(openapisdk.models.shared.ListServicesResponse listServicesResponse) {
        this.listServicesResponse = listServicesResponse;
        return this;
    }
    public Long statusCode;
    public CloudbillingServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}