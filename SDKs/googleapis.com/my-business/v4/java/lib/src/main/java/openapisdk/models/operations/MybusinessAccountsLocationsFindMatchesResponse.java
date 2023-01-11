package openapisdk.models.operations;



public class MybusinessAccountsLocationsFindMatchesResponse {
    public String contentType;
    public MybusinessAccountsLocationsFindMatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FindMatchingLocationsResponse findMatchingLocationsResponse;
    public MybusinessAccountsLocationsFindMatchesResponse withFindMatchingLocationsResponse(openapisdk.models.shared.FindMatchingLocationsResponse findMatchingLocationsResponse) {
        this.findMatchingLocationsResponse = findMatchingLocationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsFindMatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}