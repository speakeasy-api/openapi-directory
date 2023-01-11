package openapisdk.models.operations;



public class UsersPreprintsListResponse {
    public byte[] body;
    public UsersPreprintsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UsersPreprintsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersPreprintsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}