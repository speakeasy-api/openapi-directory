package openapisdk.models.shared;


public enum CertificateAuthorityStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    STAGED("STAGED"),
    AWAITING_USER_ACTIVATION("AWAITING_USER_ACTIVATION"),
    DELETED("DELETED");

    public final String value;

    private CertificateAuthorityStateEnum(String value) {
        this.value = value;
    }
}
