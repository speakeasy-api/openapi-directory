package openapisdk.models.operations;



public class EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsEnterprisePermissions actionsEnterprisePermissions;
    public EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse withActionsEnterprisePermissions(openapisdk.models.shared.ActionsEnterprisePermissions actionsEnterprisePermissions) {
        this.actionsEnterprisePermissions = actionsEnterprisePermissions;
        return this;
    }
}