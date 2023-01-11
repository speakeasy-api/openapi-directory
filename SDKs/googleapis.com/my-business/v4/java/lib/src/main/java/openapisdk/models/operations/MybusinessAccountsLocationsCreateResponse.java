package openapisdk.models.operations;



public class MybusinessAccountsLocationsCreateResponse {
    public String contentType;
    public MybusinessAccountsLocationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public MybusinessAccountsLocationsCreateResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}