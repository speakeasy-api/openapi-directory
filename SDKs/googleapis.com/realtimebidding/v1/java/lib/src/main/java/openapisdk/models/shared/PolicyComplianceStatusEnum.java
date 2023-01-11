package openapisdk.models.shared;


public enum PolicyComplianceStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    PENDING_REVIEW("PENDING_REVIEW"),
    DISAPPROVED("DISAPPROVED"),
    APPROVED("APPROVED"),
    CERTIFICATE_REQUIRED("CERTIFICATE_REQUIRED");

    public final String value;

    private PolicyComplianceStatusEnum(String value) {
        this.value = value;
    }
}
