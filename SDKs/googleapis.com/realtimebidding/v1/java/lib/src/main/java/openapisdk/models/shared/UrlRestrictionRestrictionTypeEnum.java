package openapisdk.models.shared;


public enum UrlRestrictionRestrictionTypeEnum {
    RESTRICTION_TYPE_UNSPECIFIED("RESTRICTION_TYPE_UNSPECIFIED"),
    CONTAINS("CONTAINS"),
    EQUALS("EQUALS"),
    STARTS_WITH("STARTS_WITH"),
    ENDS_WITH("ENDS_WITH"),
    DOES_NOT_EQUAL("DOES_NOT_EQUAL"),
    DOES_NOT_CONTAIN("DOES_NOT_CONTAIN"),
    DOES_NOT_START_WITH("DOES_NOT_START_WITH"),
    DOES_NOT_END_WITH("DOES_NOT_END_WITH");

    public final String value;

    private UrlRestrictionRestrictionTypeEnum(String value) {
        this.value = value;
    }
}
