package openapisdk.models.operations;



public class MybusinessplaceactionsPlaceActionTypeMetadataListResponse {
    public String contentType;
    public MybusinessplaceactionsPlaceActionTypeMetadataListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPlaceActionTypeMetadataResponse listPlaceActionTypeMetadataResponse;
    public MybusinessplaceactionsPlaceActionTypeMetadataListResponse withListPlaceActionTypeMetadataResponse(openapisdk.models.shared.ListPlaceActionTypeMetadataResponse listPlaceActionTypeMetadataResponse) {
        this.listPlaceActionTypeMetadataResponse = listPlaceActionTypeMetadataResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessplaceactionsPlaceActionTypeMetadataListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}