package openapisdk.models.shared;


public enum CertificateAuthorityTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    SELF_SIGNED("SELF_SIGNED"),
    SUBORDINATE("SUBORDINATE");

    public final String value;

    private CertificateAuthorityTypeEnum(String value) {
        this.value = value;
    }
}
