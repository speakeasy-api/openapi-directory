package openapisdk.models.shared;


public enum SiteTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    DEFAULT_SITE("DEFAULT_SITE"),
    USER_SITE("USER_SITE");

    public final String value;

    private SiteTypeEnum(String value) {
        this.value = value;
    }
}
