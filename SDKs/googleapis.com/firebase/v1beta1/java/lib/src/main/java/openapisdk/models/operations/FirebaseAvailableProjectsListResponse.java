package openapisdk.models.operations;



public class FirebaseAvailableProjectsListResponse {
    public String contentType;
    public FirebaseAvailableProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAvailableProjectsResponse listAvailableProjectsResponse;
    public FirebaseAvailableProjectsListResponse withListAvailableProjectsResponse(openapisdk.models.shared.ListAvailableProjectsResponse listAvailableProjectsResponse) {
        this.listAvailableProjectsResponse = listAvailableProjectsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseAvailableProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}