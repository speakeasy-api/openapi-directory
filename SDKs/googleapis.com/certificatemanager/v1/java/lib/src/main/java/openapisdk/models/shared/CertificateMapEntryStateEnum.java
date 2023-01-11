package openapisdk.models.shared;


public enum CertificateMapEntryStateEnum {
    SERVING_STATE_UNSPECIFIED("SERVING_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    PENDING("PENDING");

    public final String value;

    private CertificateMapEntryStateEnum(String value) {
        this.value = value;
    }
}
