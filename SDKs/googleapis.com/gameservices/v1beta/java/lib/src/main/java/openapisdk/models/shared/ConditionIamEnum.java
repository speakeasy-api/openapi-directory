package openapisdk.models.shared;


public enum ConditionIamEnum {
    NO_ATTR("NO_ATTR"),
    AUTHORITY("AUTHORITY"),
    ATTRIBUTION("ATTRIBUTION"),
    SECURITY_REALM("SECURITY_REALM"),
    APPROVER("APPROVER"),
    JUSTIFICATION_TYPE("JUSTIFICATION_TYPE"),
    CREDENTIALS_TYPE("CREDENTIALS_TYPE"),
    CREDS_ASSERTION("CREDS_ASSERTION");

    public final String value;

    private ConditionIamEnum(String value) {
        this.value = value;
    }
}
