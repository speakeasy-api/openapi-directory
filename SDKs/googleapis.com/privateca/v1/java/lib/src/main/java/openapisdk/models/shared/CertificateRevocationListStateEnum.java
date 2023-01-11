package openapisdk.models.shared;


public enum CertificateRevocationListStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    SUPERSEDED("SUPERSEDED");

    public final String value;

    private CertificateRevocationListStateEnum(String value) {
        this.value = value;
    }
}
