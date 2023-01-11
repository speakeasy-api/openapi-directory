package openapisdk.models.operations;



public class YoutubeVideoCategoriesListResponse {
    public String contentType;
    public YoutubeVideoCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeVideoCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoCategoryListResponse videoCategoryListResponse;
    public YoutubeVideoCategoriesListResponse withVideoCategoryListResponse(openapisdk.models.shared.VideoCategoryListResponse videoCategoryListResponse) {
        this.videoCategoryListResponse = videoCategoryListResponse;
        return this;
    }
}