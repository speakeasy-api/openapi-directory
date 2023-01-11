package openapisdk.models.shared;


public enum CertificateAuthorityTierEnum {
    TIER_UNSPECIFIED("TIER_UNSPECIFIED"),
    ENTERPRISE("ENTERPRISE"),
    DEVOPS("DEVOPS");

    public final String value;

    private CertificateAuthorityTierEnum(String value) {
        this.value = value;
    }
}
