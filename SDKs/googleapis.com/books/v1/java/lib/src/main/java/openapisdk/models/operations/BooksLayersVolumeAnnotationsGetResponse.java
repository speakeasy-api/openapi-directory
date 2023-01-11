package openapisdk.models.operations;



public class BooksLayersVolumeAnnotationsGetResponse {
    public String contentType;
    public BooksLayersVolumeAnnotationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksLayersVolumeAnnotationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volumeannotation volumeannotation;
    public BooksLayersVolumeAnnotationsGetResponse withVolumeannotation(openapisdk.models.shared.Volumeannotation volumeannotation) {
        this.volumeannotation = volumeannotation;
        return this;
    }
}