package openapisdk.models.operations;



public class CreateProjectAlt1Response {
    public String contentType;
    public CreateProjectAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateProjectAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateProjectAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public CreateProjectAlt1Response withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
}