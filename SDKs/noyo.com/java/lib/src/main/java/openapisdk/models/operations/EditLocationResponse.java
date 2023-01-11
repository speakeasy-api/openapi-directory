package openapisdk.models.operations;



public class EditLocationResponse {
    public String contentType;
    public EditLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationResult locationResult;
    public EditLocationResponse withLocationResult(openapisdk.models.shared.LocationResult locationResult) {
        this.locationResult = locationResult;
        return this;
    }
    public Long statusCode;
    public EditLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}