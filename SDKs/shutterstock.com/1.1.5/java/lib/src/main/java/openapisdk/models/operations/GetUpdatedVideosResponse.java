package openapisdk.models.operations;



public class GetUpdatedVideosResponse {
    public String contentType;
    public GetUpdatedVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdatedVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updatedMediaDataList;
    public GetUpdatedVideosResponse withUpdatedMediaDataList(Object updatedMediaDataList) {
        this.updatedMediaDataList = updatedMediaDataList;
        return this;
    }
}