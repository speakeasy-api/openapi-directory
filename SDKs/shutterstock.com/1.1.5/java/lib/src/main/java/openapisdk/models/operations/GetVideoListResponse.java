package openapisdk.models.operations;



public class GetVideoListResponse {
    public String contentType;
    public GetVideoListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object videoDataList;
    public GetVideoListResponse withVideoDataList(Object videoDataList) {
        this.videoDataList = videoDataList;
        return this;
    }
}