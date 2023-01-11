package openapisdk.models.operations;



public class FitnessUsersSessionsListResponse {
    public String contentType;
    public FitnessUsersSessionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSessionsResponse listSessionsResponse;
    public FitnessUsersSessionsListResponse withListSessionsResponse(openapisdk.models.shared.ListSessionsResponse listSessionsResponse) {
        this.listSessionsResponse = listSessionsResponse;
        return this;
    }
    public Long statusCode;
    public FitnessUsersSessionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}