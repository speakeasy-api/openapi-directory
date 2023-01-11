package openapisdk.models.shared;


public enum CertificateSubjectModeEnum {
    SUBJECT_REQUEST_MODE_UNSPECIFIED("SUBJECT_REQUEST_MODE_UNSPECIFIED"),
    DEFAULT_("DEFAULT"),
    REFLECTED_SPIFFE("REFLECTED_SPIFFE");

    public final String value;

    private CertificateSubjectModeEnum(String value) {
        this.value = value;
    }
}
