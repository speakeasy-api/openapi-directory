package openapisdk.models.shared;


public enum AptSettingsTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    DIST("DIST"),
    UPGRADE("UPGRADE");

    public final String value;

    private AptSettingsTypeEnum(String value) {
        this.value = value;
    }
}
