package openapisdk.models.operations;



public class GetContributorCollectionItemsResponse {
    public Object collectionItemDataList;
    public GetContributorCollectionItemsResponse withCollectionItemDataList(Object collectionItemDataList) {
        this.collectionItemDataList = collectionItemDataList;
        return this;
    }
    public String contentType;
    public GetContributorCollectionItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContributorCollectionItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}