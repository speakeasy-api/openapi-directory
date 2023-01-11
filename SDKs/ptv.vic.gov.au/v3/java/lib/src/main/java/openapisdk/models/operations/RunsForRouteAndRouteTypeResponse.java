package openapisdk.models.operations;



public class RunsForRouteAndRouteTypeResponse {
    public byte[] body;
    public RunsForRouteAndRouteTypeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RunsForRouteAndRouteTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RunsForRouteAndRouteTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public RunsForRouteAndRouteTypeResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3RunsResponse v3RunsResponse;
    public RunsForRouteAndRouteTypeResponse withV3RunsResponse(openapisdk.models.shared.V3RunsResponse v3RunsResponse) {
        this.v3RunsResponse = v3RunsResponse;
        return this;
    }
}