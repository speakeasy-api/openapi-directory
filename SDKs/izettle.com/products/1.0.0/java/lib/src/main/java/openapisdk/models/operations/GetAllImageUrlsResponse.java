package openapisdk.models.operations;



public class GetAllImageUrlsResponse {
    public String contentType;
    public GetAllImageUrlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LibraryImagesResponse libraryImagesResponse;
    public GetAllImageUrlsResponse withLibraryImagesResponse(openapisdk.models.shared.LibraryImagesResponse libraryImagesResponse) {
        this.libraryImagesResponse = libraryImagesResponse;
        return this;
    }
    public Long statusCode;
    public GetAllImageUrlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}