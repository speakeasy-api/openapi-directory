package openapisdk.models.shared;


public enum ManagedCertificateStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PROVISIONING("PROVISIONING"),
    FAILED("FAILED"),
    ACTIVE("ACTIVE");

    public final String value;

    private ManagedCertificateStateEnum(String value) {
        this.value = value;
    }
}
