package openapisdk.models.operations;



public class GetSpotListIdsByIdResponse {
    public String contentType;
    public GetSpotListIdsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] listOfItemIds;
    public GetSpotListIdsByIdResponse withListOfItemIds(String[] listOfItemIds) {
        this.listOfItemIds = listOfItemIds;
        return this;
    }
    public Long statusCode;
    public GetSpotListIdsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}