package openapisdk.models.operations;



public class MybusinessAccountsLocationsMediaListResponse {
    public String contentType;
    public MybusinessAccountsLocationsMediaListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMediaItemsResponse listMediaItemsResponse;
    public MybusinessAccountsLocationsMediaListResponse withListMediaItemsResponse(openapisdk.models.shared.ListMediaItemsResponse listMediaItemsResponse) {
        this.listMediaItemsResponse = listMediaItemsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsMediaListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}