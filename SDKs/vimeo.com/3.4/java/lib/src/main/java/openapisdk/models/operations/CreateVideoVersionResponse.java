package openapisdk.models.operations;



public class CreateVideoVersionResponse {
    public String contentType;
    public CreateVideoVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVideoVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateVideoVersionResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.VideoVersions videoVersions;
    public CreateVideoVersionResponse withVideoVersions(openapisdk.models.shared.VideoVersions videoVersions) {
        this.videoVersions = videoVersions;
        return this;
    }
}