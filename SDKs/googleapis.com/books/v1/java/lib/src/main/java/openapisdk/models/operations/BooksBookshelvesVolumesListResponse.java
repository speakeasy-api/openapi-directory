package openapisdk.models.operations;



public class BooksBookshelvesVolumesListResponse {
    public String contentType;
    public BooksBookshelvesVolumesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksBookshelvesVolumesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksBookshelvesVolumesListResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}