package openapisdk.models.operations;



public class ImportProjectResponse {
    public byte[] body;
    public ImportProjectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImportProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public ImportProjectResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public ImportProjectResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public ImportProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}