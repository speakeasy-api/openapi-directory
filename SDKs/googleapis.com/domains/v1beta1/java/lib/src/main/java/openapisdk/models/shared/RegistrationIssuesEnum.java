package openapisdk.models.shared;


public enum RegistrationIssuesEnum {
    ISSUE_UNSPECIFIED("ISSUE_UNSPECIFIED"),
    CONTACT_SUPPORT("CONTACT_SUPPORT"),
    UNVERIFIED_EMAIL("UNVERIFIED_EMAIL");

    public final String value;

    private RegistrationIssuesEnum(String value) {
        this.value = value;
    }
}
