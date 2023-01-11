package openapisdk.models.shared;


public enum ClientForbiddenProblemReasonEnum {
    OFFICIAL_CLIENT_FORBIDDEN("official-client-forbidden"),
    CLIENT_NOT_ENROLLED("client-not-enrolled");

    public final String value;

    private ClientForbiddenProblemReasonEnum(String value) {
        this.value = value;
    }
}
