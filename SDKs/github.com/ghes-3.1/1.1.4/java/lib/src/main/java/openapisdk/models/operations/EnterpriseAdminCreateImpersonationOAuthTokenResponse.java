package openapisdk.models.operations;



public class EnterpriseAdminCreateImpersonationOAuthTokenResponse {
    public String contentType;
    public EnterpriseAdminCreateImpersonationOAuthTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateImpersonationOAuthTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public EnterpriseAdminCreateImpersonationOAuthTokenResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
}