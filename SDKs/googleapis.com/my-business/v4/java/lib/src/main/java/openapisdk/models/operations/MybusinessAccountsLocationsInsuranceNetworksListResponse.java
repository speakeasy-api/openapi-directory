package openapisdk.models.operations;



public class MybusinessAccountsLocationsInsuranceNetworksListResponse {
    public String contentType;
    public MybusinessAccountsLocationsInsuranceNetworksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInsuranceNetworksResponse listInsuranceNetworksResponse;
    public MybusinessAccountsLocationsInsuranceNetworksListResponse withListInsuranceNetworksResponse(openapisdk.models.shared.ListInsuranceNetworksResponse listInsuranceNetworksResponse) {
        this.listInsuranceNetworksResponse = listInsuranceNetworksResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsInsuranceNetworksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}