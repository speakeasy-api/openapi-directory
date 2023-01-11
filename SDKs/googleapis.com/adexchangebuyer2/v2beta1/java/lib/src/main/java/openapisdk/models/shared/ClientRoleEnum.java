package openapisdk.models.shared;


public enum ClientRoleEnum {
    CLIENT_ROLE_UNSPECIFIED("CLIENT_ROLE_UNSPECIFIED"),
    CLIENT_DEAL_VIEWER("CLIENT_DEAL_VIEWER"),
    CLIENT_DEAL_NEGOTIATOR("CLIENT_DEAL_NEGOTIATOR"),
    CLIENT_DEAL_APPROVER("CLIENT_DEAL_APPROVER");

    public final String value;

    private ClientRoleEnum(String value) {
        this.value = value;
    }
}
