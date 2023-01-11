package openapisdk.models.operations;



public class CloudresourcemanagerProjectsCreateResponse {
    public String contentType;
    public CloudresourcemanagerProjectsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public CloudresourcemanagerProjectsCreateResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}