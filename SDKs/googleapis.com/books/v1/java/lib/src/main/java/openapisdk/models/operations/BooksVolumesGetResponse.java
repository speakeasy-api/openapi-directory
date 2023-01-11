package openapisdk.models.operations;



public class BooksVolumesGetResponse {
    public String contentType;
    public BooksVolumesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksVolumesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Volume volume;
    public BooksVolumesGetResponse withVolume(openapisdk.models.shared.Volume volume) {
        this.volume = volume;
        return this;
    }
}