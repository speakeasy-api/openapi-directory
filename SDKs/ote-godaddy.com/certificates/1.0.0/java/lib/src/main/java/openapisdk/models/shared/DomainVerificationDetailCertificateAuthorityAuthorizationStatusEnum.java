package openapisdk.models.shared;


public enum DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum {
    PENDING("PENDING"),
    REMOVED_DNS_ERROR("REMOVED_DNS_ERROR"),
    REMOVED_DNSSEC_ENABLED("REMOVED_DNSSEC_ENABLED"),
    REMOVED_NOT_FOUND_CA("REMOVED_NOT_FOUND_CA"),
    REMOVED_UNKNOWN_CRITICAL_TAG("REMOVED_UNKNOWN_CRITICAL_TAG"),
    SUCCESS_CAA("SUCCESS_CAA"),
    SUCCESS_DNSSEC("SUCCESS_DNSSEC");

    public final String value;

    private DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum(String value) {
        this.value = value;
    }
}
