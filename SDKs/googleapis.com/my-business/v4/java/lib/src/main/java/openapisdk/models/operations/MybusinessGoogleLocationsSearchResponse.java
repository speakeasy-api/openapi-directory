package openapisdk.models.operations;



public class MybusinessGoogleLocationsSearchResponse {
    public String contentType;
    public MybusinessGoogleLocationsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchGoogleLocationsResponse searchGoogleLocationsResponse;
    public MybusinessGoogleLocationsSearchResponse withSearchGoogleLocationsResponse(openapisdk.models.shared.SearchGoogleLocationsResponse searchGoogleLocationsResponse) {
        this.searchGoogleLocationsResponse = searchGoogleLocationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessGoogleLocationsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}