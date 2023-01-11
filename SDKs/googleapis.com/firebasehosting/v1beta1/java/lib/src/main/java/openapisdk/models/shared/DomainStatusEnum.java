package openapisdk.models.shared;


public enum DomainStatusEnum {
    DOMAIN_STATUS_UNSPECIFIED("DOMAIN_STATUS_UNSPECIFIED"),
    DOMAIN_CHANGE_PENDING("DOMAIN_CHANGE_PENDING"),
    DOMAIN_ACTIVE("DOMAIN_ACTIVE"),
    DOMAIN_VERIFICATION_REQUIRED("DOMAIN_VERIFICATION_REQUIRED"),
    DOMAIN_VERIFICATION_LOST("DOMAIN_VERIFICATION_LOST");

    public final String value;

    private DomainStatusEnum(String value) {
        this.value = value;
    }
}
