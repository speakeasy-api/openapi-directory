package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesListResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNamespacesResponse listNamespacesResponse;
    public ServicedirectoryProjectsLocationsNamespacesListResponse withListNamespacesResponse(openapisdk.models.shared.ListNamespacesResponse listNamespacesResponse) {
        this.listNamespacesResponse = listNamespacesResponse;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}