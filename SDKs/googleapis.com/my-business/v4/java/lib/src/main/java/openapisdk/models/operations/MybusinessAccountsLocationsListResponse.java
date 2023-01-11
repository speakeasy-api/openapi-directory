package openapisdk.models.operations;



public class MybusinessAccountsLocationsListResponse {
    public String contentType;
    public MybusinessAccountsLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationsResponse listLocationsResponse;
    public MybusinessAccountsLocationsListResponse withListLocationsResponse(openapisdk.models.shared.ListLocationsResponse listLocationsResponse) {
        this.listLocationsResponse = listLocationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}