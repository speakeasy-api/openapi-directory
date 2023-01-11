package openapisdk.models.operations;



public class BooksVolumesListResponse {
    public String contentType;
    public BooksVolumesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksVolumesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumes volumes;
    public BooksVolumesListResponse withVolumes(openapisdk.models.shared.Volumes volumes) {
        this.volumes = volumes;
        return this;
    }
}