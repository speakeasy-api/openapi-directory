package openapisdk.models.operations;



public class DisplayvideoUsersListResponse {
    public String contentType;
    public DisplayvideoUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUsersResponse listUsersResponse;
    public DisplayvideoUsersListResponse withListUsersResponse(openapisdk.models.shared.ListUsersResponse listUsersResponse) {
        this.listUsersResponse = listUsersResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}