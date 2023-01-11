package openapisdk.models.shared;


public enum CompanyTermsStatusEnum {
    TERMS_STATUS_UNSPECIFIED("TERMS_STATUS_UNSPECIFIED"),
    TERMS_STATUS_NOT_ACCEPTED("TERMS_STATUS_NOT_ACCEPTED"),
    TERMS_STATUS_ACCEPTED("TERMS_STATUS_ACCEPTED"),
    TERMS_STATUS_STALE("TERMS_STATUS_STALE");

    public final String value;

    private CompanyTermsStatusEnum(String value) {
        this.value = value;
    }
}
