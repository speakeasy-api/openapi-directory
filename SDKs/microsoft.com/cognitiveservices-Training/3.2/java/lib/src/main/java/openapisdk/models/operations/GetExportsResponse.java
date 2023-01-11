package openapisdk.models.operations;



public class GetExportsResponse {
    public byte[] body;
    public GetExportsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetExportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetExportsResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Export[] exports;
    public GetExportsResponse withExports(openapisdk.models.shared.Export[] exports) {
        this.exports = exports;
        return this;
    }
    public Long statusCode;
    public GetExportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}