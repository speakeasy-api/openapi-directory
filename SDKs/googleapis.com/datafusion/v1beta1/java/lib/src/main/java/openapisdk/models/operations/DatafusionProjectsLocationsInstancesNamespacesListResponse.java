package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesNamespacesListResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesNamespacesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNamespacesResponse listNamespacesResponse;
    public DatafusionProjectsLocationsInstancesNamespacesListResponse withListNamespacesResponse(openapisdk.models.shared.ListNamespacesResponse listNamespacesResponse) {
        this.listNamespacesResponse = listNamespacesResponse;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesNamespacesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}