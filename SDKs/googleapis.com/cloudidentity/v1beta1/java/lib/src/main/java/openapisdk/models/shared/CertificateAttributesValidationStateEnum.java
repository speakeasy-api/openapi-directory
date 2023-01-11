package openapisdk.models.shared;


public enum CertificateAttributesValidationStateEnum {
    CERTIFICATE_VALIDATION_STATE_UNSPECIFIED("CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"),
    VALIDATION_SUCCESSFUL("VALIDATION_SUCCESSFUL"),
    VALIDATION_FAILED("VALIDATION_FAILED");

    public final String value;

    private CertificateAttributesValidationStateEnum(String value) {
        this.value = value;
    }
}
