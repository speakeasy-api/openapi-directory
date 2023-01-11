package openapisdk.models.operations;



public class VmmigrationProjectsLocationsTargetProjectsGetResponse {
    public String contentType;
    public VmmigrationProjectsLocationsTargetProjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsTargetProjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetProject targetProject;
    public VmmigrationProjectsLocationsTargetProjectsGetResponse withTargetProject(openapisdk.models.shared.TargetProject targetProject) {
        this.targetProject = targetProject;
        return this;
    }
}