package openapisdk.models.operations;



public class ActionsGetOrgPublicKeyResponse {
    public String contentType;
    public ActionsGetOrgPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetOrgPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsPublicKey actionsPublicKey;
    public ActionsGetOrgPublicKeyResponse withActionsPublicKey(openapisdk.models.shared.ActionsPublicKey actionsPublicKey) {
        this.actionsPublicKey = actionsPublicKey;
        return this;
    }
}