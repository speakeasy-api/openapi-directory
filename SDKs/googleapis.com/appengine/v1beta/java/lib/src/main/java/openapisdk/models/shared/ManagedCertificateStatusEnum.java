package openapisdk.models.shared;


public enum ManagedCertificateStatusEnum {
    MANAGEMENT_STATUS_UNSPECIFIED("MANAGEMENT_STATUS_UNSPECIFIED"),
    OK("OK"),
    PENDING("PENDING"),
    FAILED_RETRYING_NOT_VISIBLE("FAILED_RETRYING_NOT_VISIBLE"),
    FAILED_PERMANENT("FAILED_PERMANENT"),
    FAILED_RETRYING_CAA_FORBIDDEN("FAILED_RETRYING_CAA_FORBIDDEN"),
    FAILED_RETRYING_CAA_CHECKING("FAILED_RETRYING_CAA_CHECKING");

    public final String value;

    private ManagedCertificateStatusEnum(String value) {
        this.value = value;
    }
}
