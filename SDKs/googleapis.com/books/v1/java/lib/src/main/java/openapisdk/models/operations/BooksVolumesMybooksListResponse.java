package openapisdk.models.operations;



public class BooksVolumesMybooksListResponse {
    public String contentType;
    public BooksVolumesMybooksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksVolumesMybooksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksVolumesMybooksListResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}