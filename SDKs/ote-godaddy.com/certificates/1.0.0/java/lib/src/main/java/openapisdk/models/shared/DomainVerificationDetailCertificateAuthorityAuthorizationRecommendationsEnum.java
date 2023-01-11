package openapisdk.models.shared;


public enum DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum {
    ADD_CA_TO_CAA("ADD_CA_TO_CAA"),
    CREATE_TARGET_DOMAIN_CAA("CREATE_TARGET_DOMAIN_CAA"),
    DISABLE_DNSSEC("DISABLE_DNSSEC"),
    FIX_CRITICAL_TAG("FIX_CRITICAL_TAG"),
    VALIDATE_SOA("VALIDATE_SOA");

    public final String value;

    private DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum(String value) {
        this.value = value;
    }
}
