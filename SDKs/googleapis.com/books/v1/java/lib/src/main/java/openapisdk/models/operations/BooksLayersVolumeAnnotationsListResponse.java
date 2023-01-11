package openapisdk.models.operations;



public class BooksLayersVolumeAnnotationsListResponse {
    public String contentType;
    public BooksLayersVolumeAnnotationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksLayersVolumeAnnotationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumeannotations volumeannotations;
    public BooksLayersVolumeAnnotationsListResponse withVolumeannotations(openapisdk.models.shared.Volumeannotations volumeannotations) {
        this.volumeannotations = volumeannotations;
        return this;
    }
}