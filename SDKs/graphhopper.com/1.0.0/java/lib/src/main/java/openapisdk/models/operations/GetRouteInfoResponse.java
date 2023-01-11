package openapisdk.models.operations;



public class GetRouteInfoResponse {
    public String contentType;
    public GetRouteInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InfoResponse infoResponse;
    public GetRouteInfoResponse withInfoResponse(openapisdk.models.shared.InfoResponse infoResponse) {
        this.infoResponse = infoResponse;
        return this;
    }
    public Long statusCode;
    public GetRouteInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}