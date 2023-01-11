package openapisdk.models.shared;


public enum DomainProvisioningCertStatusEnum {
    CERT_STATUS_UNSPECIFIED("CERT_STATUS_UNSPECIFIED"),
    CERT_PENDING("CERT_PENDING"),
    CERT_MISSING("CERT_MISSING"),
    CERT_PROCESSING("CERT_PROCESSING"),
    CERT_PROPAGATING("CERT_PROPAGATING"),
    CERT_ACTIVE("CERT_ACTIVE"),
    CERT_ERROR("CERT_ERROR");

    public final String value;

    private DomainProvisioningCertStatusEnum(String value) {
        this.value = value;
    }
}
