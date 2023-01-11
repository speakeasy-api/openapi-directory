package openapisdk.models.operations;



public class ProjectsGetPermissionForUserResponse {
    public String contentType;
    public ProjectsGetPermissionForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsGetPermissionForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsGetPermissionForUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ProjectsGetPermissionForUser415ApplicationJson projectsGetPermissionForUser415ApplicationJSONObject;
    public ProjectsGetPermissionForUserResponse withProjectsGetPermissionForUser415ApplicationJsonObject(ProjectsGetPermissionForUser415ApplicationJson projectsGetPermissionForUser415ApplicationJSONObject) {
        this.projectsGetPermissionForUser415ApplicationJSONObject = projectsGetPermissionForUser415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.RepositoryCollaboratorPermission repositoryCollaboratorPermission;
    public ProjectsGetPermissionForUserResponse withRepositoryCollaboratorPermission(openapisdk.models.shared.RepositoryCollaboratorPermission repositoryCollaboratorPermission) {
        this.repositoryCollaboratorPermission = repositoryCollaboratorPermission;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ProjectsGetPermissionForUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}