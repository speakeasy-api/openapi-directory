package openapisdk.models.operations;



public class MybusinessAccountsLocationsMediaCustomersListResponse {
    public String contentType;
    public MybusinessAccountsLocationsMediaCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomerMediaItemsResponse listCustomerMediaItemsResponse;
    public MybusinessAccountsLocationsMediaCustomersListResponse withListCustomerMediaItemsResponse(openapisdk.models.shared.ListCustomerMediaItemsResponse listCustomerMediaItemsResponse) {
        this.listCustomerMediaItemsResponse = listCustomerMediaItemsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsMediaCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}