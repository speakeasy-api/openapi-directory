package openapisdk.models.operations;



public class DriveFilesGenerateIdsResponse {
    public String contentType;
    public DriveFilesGenerateIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GeneratedIds generatedIds;
    public DriveFilesGenerateIdsResponse withGeneratedIds(openapisdk.models.shared.GeneratedIds generatedIds) {
        this.generatedIds = generatedIds;
        return this;
    }
    public Long statusCode;
    public DriveFilesGenerateIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}