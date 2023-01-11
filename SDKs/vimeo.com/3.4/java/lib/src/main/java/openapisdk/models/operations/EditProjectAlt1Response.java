package openapisdk.models.operations;



public class EditProjectAlt1Response {
    public String contentType;
    public EditProjectAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditProjectAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public EditProjectAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public EditProjectAlt1Response withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
}