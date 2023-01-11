package openapisdk.models.operations;



public class CreateLocationResponse {
    public String contentType;
    public CreateLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationResult locationResult;
    public CreateLocationResponse withLocationResult(openapisdk.models.shared.LocationResult locationResult) {
        this.locationResult = locationResult;
        return this;
    }
    public Long statusCode;
    public CreateLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}