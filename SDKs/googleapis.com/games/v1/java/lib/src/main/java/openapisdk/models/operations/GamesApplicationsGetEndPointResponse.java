package openapisdk.models.operations;



public class GamesApplicationsGetEndPointResponse {
    public String contentType;
    public GamesApplicationsGetEndPointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EndPoint endPoint;
    public GamesApplicationsGetEndPointResponse withEndPoint(openapisdk.models.shared.EndPoint endPoint) {
        this.endPoint = endPoint;
        return this;
    }
    public Long statusCode;
    public GamesApplicationsGetEndPointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}