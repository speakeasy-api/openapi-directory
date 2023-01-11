package openapisdk.models.operations;



public class GetProjectAlt1Response {
    public String contentType;
    public GetProjectAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public GetProjectAlt1Response withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
}