package openapisdk.models.operations;



public class MybusinessplaceactionsLocationsPlaceActionLinksListResponse {
    public String contentType;
    public MybusinessplaceactionsLocationsPlaceActionLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPlaceActionLinksResponse listPlaceActionLinksResponse;
    public MybusinessplaceactionsLocationsPlaceActionLinksListResponse withListPlaceActionLinksResponse(openapisdk.models.shared.ListPlaceActionLinksResponse listPlaceActionLinksResponse) {
        this.listPlaceActionLinksResponse = listPlaceActionLinksResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessplaceactionsLocationsPlaceActionLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}