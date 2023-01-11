package openapisdk.models.operations;



public class GetKeyByIdResponse {
    public String contentType;
    public GetKeyByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Key key;
    public GetKeyByIdResponse withKey(openapisdk.models.shared.Key key) {
        this.key = key;
        return this;
    }
    public Long statusCode;
    public GetKeyByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}