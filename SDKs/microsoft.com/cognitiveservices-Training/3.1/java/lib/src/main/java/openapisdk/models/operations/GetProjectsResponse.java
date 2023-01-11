package openapisdk.models.operations;



public class GetProjectsResponse {
    public byte[] body;
    public GetProjectsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetProjectsResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Project[] projects;
    public GetProjectsResponse withProjects(openapisdk.models.shared.Project[] projects) {
        this.projects = projects;
        return this;
    }
    public Long statusCode;
    public GetProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}