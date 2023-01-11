package openapisdk.models.operations;



public class PatternsGetPatternByRunResponse {
    public byte[] body;
    public PatternsGetPatternByRunResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatternsGetPatternByRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatternsGetPatternByRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public PatternsGetPatternByRunResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3StoppingPattern v3StoppingPattern;
    public PatternsGetPatternByRunResponse withV3StoppingPattern(openapisdk.models.shared.V3StoppingPattern v3StoppingPattern) {
        this.v3StoppingPattern = v3StoppingPattern;
        return this;
    }
}