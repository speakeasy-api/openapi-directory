package openapisdk.models.operations;



public class CloudresourcemanagerProjectsGetResponse {
    public String contentType;
    public CloudresourcemanagerProjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public CloudresourcemanagerProjectsGetResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}