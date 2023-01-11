package openapisdk.models.operations;



public class CloudresourcemanagerProjectsUpdateResponse {
    public String contentType;
    public CloudresourcemanagerProjectsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public CloudresourcemanagerProjectsUpdateResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}