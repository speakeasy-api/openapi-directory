package openapisdk.models.operations;



public class GetApiVersionResponse {
    public openapisdk.models.shared.ApiVersion apiVersion;
    public GetApiVersionResponse withApiVersion(openapisdk.models.shared.ApiVersion apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    public String contentType;
    public GetApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}