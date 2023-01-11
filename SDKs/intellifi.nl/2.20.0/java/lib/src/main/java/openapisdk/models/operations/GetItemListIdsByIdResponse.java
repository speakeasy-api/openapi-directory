package openapisdk.models.operations;



public class GetItemListIdsByIdResponse {
    public String contentType;
    public GetItemListIdsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] listOfItemIds;
    public GetItemListIdsByIdResponse withListOfItemIds(String[] listOfItemIds) {
        this.listOfItemIds = listOfItemIds;
        return this;
    }
    public Long statusCode;
    public GetItemListIdsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}