package openapisdk.models.operations;



public class FileProjectsLocationsInstancesListResponse {
    public String contentType;
    public FileProjectsLocationsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInstancesResponse listInstancesResponse;
    public FileProjectsLocationsInstancesListResponse withListInstancesResponse(openapisdk.models.shared.ListInstancesResponse listInstancesResponse) {
        this.listInstancesResponse = listInstancesResponse;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}