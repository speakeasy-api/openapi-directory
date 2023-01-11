package openapisdk.models.operations;



public class FileProjectsLocationsOperationsListResponse {
    public String contentType;
    public FileProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public FileProjectsLocationsOperationsListResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}