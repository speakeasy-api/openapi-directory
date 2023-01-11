package openapisdk.models.operations;



public class MybusinessAccountsListRecommendGoogleLocationsResponse {
    public String contentType;
    public MybusinessAccountsListRecommendGoogleLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRecommendedGoogleLocationsResponse listRecommendedGoogleLocationsResponse;
    public MybusinessAccountsListRecommendGoogleLocationsResponse withListRecommendedGoogleLocationsResponse(openapisdk.models.shared.ListRecommendedGoogleLocationsResponse listRecommendedGoogleLocationsResponse) {
        this.listRecommendedGoogleLocationsResponse = listRecommendedGoogleLocationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsListRecommendGoogleLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}