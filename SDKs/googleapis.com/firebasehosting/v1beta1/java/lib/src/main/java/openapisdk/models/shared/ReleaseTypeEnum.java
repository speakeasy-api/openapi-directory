package openapisdk.models.shared;


public enum ReleaseTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    DEPLOY("DEPLOY"),
    ROLLBACK("ROLLBACK"),
    SITE_DISABLE("SITE_DISABLE");

    public final String value;

    private ReleaseTypeEnum(String value) {
        this.value = value;
    }
}
