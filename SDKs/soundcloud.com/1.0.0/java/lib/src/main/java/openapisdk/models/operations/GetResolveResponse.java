package openapisdk.models.operations;



public class GetResolveResponse {
    public String contentType;
    public GetResolveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Found found;
    public GetResolveResponse withFound(openapisdk.models.shared.Found found) {
        this.found = found;
        return this;
    }
    public Long statusCode;
    public GetResolveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}