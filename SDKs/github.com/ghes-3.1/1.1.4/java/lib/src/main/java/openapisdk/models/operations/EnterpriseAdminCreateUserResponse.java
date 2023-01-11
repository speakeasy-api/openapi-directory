package openapisdk.models.operations;



public class EnterpriseAdminCreateUserResponse {
    public String contentType;
    public EnterpriseAdminCreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SimpleUser simpleUser;
    public EnterpriseAdminCreateUserResponse withSimpleUser(openapisdk.models.shared.SimpleUser simpleUser) {
        this.simpleUser = simpleUser;
        return this;
    }
}