package openapisdk.models.operations;



public class GetItemListByIdResponse {
    public String contentType;
    public GetItemListByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ItemList itemList;
    public GetItemListByIdResponse withItemList(openapisdk.models.shared.ItemList itemList) {
        this.itemList = itemList;
        return this;
    }
    public Long statusCode;
    public GetItemListByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}