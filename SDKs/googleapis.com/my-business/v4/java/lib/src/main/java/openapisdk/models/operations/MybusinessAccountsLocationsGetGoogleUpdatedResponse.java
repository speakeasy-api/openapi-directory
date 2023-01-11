package openapisdk.models.operations;



public class MybusinessAccountsLocationsGetGoogleUpdatedResponse {
    public String contentType;
    public MybusinessAccountsLocationsGetGoogleUpdatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleUpdatedLocation googleUpdatedLocation;
    public MybusinessAccountsLocationsGetGoogleUpdatedResponse withGoogleUpdatedLocation(openapisdk.models.shared.GoogleUpdatedLocation googleUpdatedLocation) {
        this.googleUpdatedLocation = googleUpdatedLocation;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsGetGoogleUpdatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}