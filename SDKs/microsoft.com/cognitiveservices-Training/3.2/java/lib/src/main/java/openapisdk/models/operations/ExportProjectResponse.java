package openapisdk.models.operations;



public class ExportProjectResponse {
    public byte[] body;
    public ExportProjectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public ExportProjectResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ProjectExport projectExport;
    public ExportProjectResponse withProjectExport(openapisdk.models.shared.ProjectExport projectExport) {
        this.projectExport = projectExport;
        return this;
    }
    public Long statusCode;
    public ExportProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}