package openapisdk.models.operations;



public class ActionsGetGithubActionsPermissionsRepositoryResponse {
    public String contentType;
    public ActionsGetGithubActionsPermissionsRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetGithubActionsPermissionsRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsRepositoryPermissions actionsRepositoryPermissions;
    public ActionsGetGithubActionsPermissionsRepositoryResponse withActionsRepositoryPermissions(openapisdk.models.shared.ActionsRepositoryPermissions actionsRepositoryPermissions) {
        this.actionsRepositoryPermissions = actionsRepositoryPermissions;
        return this;
    }
}