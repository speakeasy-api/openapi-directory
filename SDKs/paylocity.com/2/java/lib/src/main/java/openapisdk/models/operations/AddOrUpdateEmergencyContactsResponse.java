package openapisdk.models.operations;



public class AddOrUpdateEmergencyContactsResponse {
    public String contentType;
    public AddOrUpdateEmergencyContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddOrUpdateEmergencyContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddOrUpdateEmergencyContactsResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}