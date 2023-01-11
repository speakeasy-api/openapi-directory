package openapisdk.models.operations;



public class GetUvResponse {
    public String contentType;
    public GetUvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UvIndexResult uvIndexResult;
    public GetUvResponse withUvIndexResult(openapisdk.models.shared.UvIndexResult uvIndexResult) {
        this.uvIndexResult = uvIndexResult;
        return this;
    }
}