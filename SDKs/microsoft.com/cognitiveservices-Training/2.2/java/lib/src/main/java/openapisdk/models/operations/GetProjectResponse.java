package openapisdk.models.operations;



public class GetProjectResponse {
    public byte[] body;
    public GetProjectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public GetProjectResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public GetProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}