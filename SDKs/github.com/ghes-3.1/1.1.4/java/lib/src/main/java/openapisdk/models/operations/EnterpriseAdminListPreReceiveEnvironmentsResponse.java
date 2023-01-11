package openapisdk.models.operations;



public class EnterpriseAdminListPreReceiveEnvironmentsResponse {
    public String contentType;
    public EnterpriseAdminListPreReceiveEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListPreReceiveEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveEnvironment[] preReceiveEnvironments;
    public EnterpriseAdminListPreReceiveEnvironmentsResponse withPreReceiveEnvironments(openapisdk.models.shared.PreReceiveEnvironment[] preReceiveEnvironments) {
        this.preReceiveEnvironments = preReceiveEnvironments;
        return this;
    }
}