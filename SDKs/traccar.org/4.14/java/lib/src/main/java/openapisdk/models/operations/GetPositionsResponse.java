package openapisdk.models.operations;



public class GetPositionsResponse {
    public byte[] body;
    public GetPositionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPositionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Position[] positions;
    public GetPositionsResponse withPositions(openapisdk.models.shared.Position[] positions) {
        this.positions = positions;
        return this;
    }
    public Long statusCode;
    public GetPositionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}