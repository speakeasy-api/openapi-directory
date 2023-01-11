package openapisdk.models.operations;



public class GetImageListResponse {
    public String contentType;
    public GetImageListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object imageDataList;
    public GetImageListResponse withImageDataList(Object imageDataList) {
        this.imageDataList = imageDataList;
        return this;
    }
    public Long statusCode;
    public GetImageListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}