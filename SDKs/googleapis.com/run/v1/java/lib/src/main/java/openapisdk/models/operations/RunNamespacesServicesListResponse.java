package openapisdk.models.operations;



public class RunNamespacesServicesListResponse {
    public String contentType;
    public RunNamespacesServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServicesResponse listServicesResponse;
    public RunNamespacesServicesListResponse withListServicesResponse(openapisdk.models.shared.ListServicesResponse listServicesResponse) {
        this.listServicesResponse = listServicesResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}