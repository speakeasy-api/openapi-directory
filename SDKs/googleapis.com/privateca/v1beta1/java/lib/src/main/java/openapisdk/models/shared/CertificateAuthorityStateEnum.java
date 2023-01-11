package openapisdk.models.shared;


public enum CertificateAuthorityStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    PENDING_ACTIVATION("PENDING_ACTIVATION"),
    PENDING_DELETION("PENDING_DELETION");

    public final String value;

    private CertificateAuthorityStateEnum(String value) {
        this.value = value;
    }
}
