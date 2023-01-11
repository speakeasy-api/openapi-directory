package openapisdk.models.operations;



public class GetContributorCollectionsListResponse {
    public Object collectionDataList;
    public GetContributorCollectionsListResponse withCollectionDataList(Object collectionDataList) {
        this.collectionDataList = collectionDataList;
        return this;
    }
    public String contentType;
    public GetContributorCollectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContributorCollectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}