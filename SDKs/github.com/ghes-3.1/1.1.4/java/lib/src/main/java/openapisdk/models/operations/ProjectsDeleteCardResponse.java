package openapisdk.models.operations;



public class ProjectsDeleteCardResponse {
    public String contentType;
    public ProjectsDeleteCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsDeleteCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsDeleteCardResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ProjectsDeleteCard403ApplicationJson projectsDeleteCard403ApplicationJSONObject;
    public ProjectsDeleteCardResponse withProjectsDeleteCard403ApplicationJsonObject(ProjectsDeleteCard403ApplicationJson projectsDeleteCard403ApplicationJSONObject) {
        this.projectsDeleteCard403ApplicationJSONObject = projectsDeleteCard403ApplicationJSONObject;
        return this;
    }
}