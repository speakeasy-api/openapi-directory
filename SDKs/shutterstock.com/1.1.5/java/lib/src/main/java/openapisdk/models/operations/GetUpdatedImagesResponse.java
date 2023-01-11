package openapisdk.models.operations;



public class GetUpdatedImagesResponse {
    public String contentType;
    public GetUpdatedImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdatedImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updatedMediaDataList;
    public GetUpdatedImagesResponse withUpdatedMediaDataList(Object updatedMediaDataList) {
        this.updatedMediaDataList = updatedMediaDataList;
        return this;
    }
}