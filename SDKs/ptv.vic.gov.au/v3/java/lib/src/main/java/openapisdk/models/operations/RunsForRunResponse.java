package openapisdk.models.operations;



public class RunsForRunResponse {
    public byte[] body;
    public RunsForRunResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RunsForRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RunsForRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public RunsForRunResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3RunsResponse v3RunsResponse;
    public RunsForRunResponse withV3RunsResponse(openapisdk.models.shared.V3RunsResponse v3RunsResponse) {
        this.v3RunsResponse = v3RunsResponse;
        return this;
    }
}