package openapisdk.models.operations;



public class AndroidpublisherUsersListResponse {
    public String contentType;
    public AndroidpublisherUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUsersResponse listUsersResponse;
    public AndroidpublisherUsersListResponse withListUsersResponse(openapisdk.models.shared.ListUsersResponse listUsersResponse) {
        this.listUsersResponse = listUsersResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}