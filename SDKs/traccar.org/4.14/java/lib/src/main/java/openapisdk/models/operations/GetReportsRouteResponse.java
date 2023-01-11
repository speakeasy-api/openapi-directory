package openapisdk.models.operations;



public class GetReportsRouteResponse {
    public byte[] body;
    public GetReportsRouteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReportsRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Position[] positions;
    public GetReportsRouteResponse withPositions(openapisdk.models.shared.Position[] positions) {
        this.positions = positions;
        return this;
    }
    public Long statusCode;
    public GetReportsRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}