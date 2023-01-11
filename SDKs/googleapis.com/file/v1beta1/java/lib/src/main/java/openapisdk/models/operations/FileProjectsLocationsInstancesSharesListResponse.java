package openapisdk.models.operations;



public class FileProjectsLocationsInstancesSharesListResponse {
    public String contentType;
    public FileProjectsLocationsInstancesSharesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSharesResponse listSharesResponse;
    public FileProjectsLocationsInstancesSharesListResponse withListSharesResponse(openapisdk.models.shared.ListSharesResponse listSharesResponse) {
        this.listSharesResponse = listSharesResponse;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsInstancesSharesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}