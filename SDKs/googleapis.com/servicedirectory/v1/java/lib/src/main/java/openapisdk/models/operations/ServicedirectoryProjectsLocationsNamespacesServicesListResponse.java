package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesListResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServicesResponse listServicesResponse;
    public ServicedirectoryProjectsLocationsNamespacesServicesListResponse withListServicesResponse(openapisdk.models.shared.ListServicesResponse listServicesResponse) {
        this.listServicesResponse = listServicesResponse;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}