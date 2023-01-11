package openapisdk.models.operations;



public class BooksMylibraryBookshelvesVolumesListResponse {
    public String contentType;
    public BooksMylibraryBookshelvesVolumesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryBookshelvesVolumesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksMylibraryBookshelvesVolumesListResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}