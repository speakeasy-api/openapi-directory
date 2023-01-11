package openapisdk.models.operations;



public class ReadVersionV1EnCoreWebSmVersionGetResponse {
    public String contentType;
    public ReadVersionV1EnCoreWebSmVersionGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReadVersionV1EnCoreWebSmVersionGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VersionOut versionOut;
    public ReadVersionV1EnCoreWebSmVersionGetResponse withVersionOut(openapisdk.models.shared.VersionOut versionOut) {
        this.versionOut = versionOut;
        return this;
    }
}