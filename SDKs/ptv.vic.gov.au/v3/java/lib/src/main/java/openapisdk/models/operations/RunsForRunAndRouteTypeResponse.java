package openapisdk.models.operations;



public class RunsForRunAndRouteTypeResponse {
    public byte[] body;
    public RunsForRunAndRouteTypeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RunsForRunAndRouteTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RunsForRunAndRouteTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public RunsForRunAndRouteTypeResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3RunResponse v3RunResponse;
    public RunsForRunAndRouteTypeResponse withV3RunResponse(openapisdk.models.shared.V3RunResponse v3RunResponse) {
        this.v3RunResponse = v3RunResponse;
        return this;
    }
}