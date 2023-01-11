package openapisdk.models.operations;



public class GetEventDistrictPointsResponse {
    public String contentType;
    public GetEventDistrictPointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventDistrictPoints eventDistrictPoints;
    public GetEventDistrictPointsResponse withEventDistrictPoints(openapisdk.models.shared.EventDistrictPoints eventDistrictPoints) {
        this.eventDistrictPoints = eventDistrictPoints;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventDistrictPointsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventDistrictPointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}