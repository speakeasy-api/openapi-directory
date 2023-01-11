package openapisdk.models.operations;



public class GetLocationResponse {
    public String contentType;
    public GetLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationResult locationResult;
    public GetLocationResponse withLocationResult(openapisdk.models.shared.LocationResult locationResult) {
        this.locationResult = locationResult;
        return this;
    }
    public Long statusCode;
    public GetLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}