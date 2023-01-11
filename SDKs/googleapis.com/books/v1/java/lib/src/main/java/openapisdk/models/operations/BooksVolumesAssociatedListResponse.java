package openapisdk.models.operations;



public class BooksVolumesAssociatedListResponse {
    public String contentType;
    public BooksVolumesAssociatedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksVolumesAssociatedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksVolumesAssociatedListResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}