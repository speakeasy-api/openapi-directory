package openapisdk.models.operations;


public enum YoutubeSearchListSafeSearchEnum {
    SAFE_SEARCH_SETTING_UNSPECIFIED("safeSearchSettingUnspecified"),
    NONE("none"),
    MODERATE("moderate"),
    STRICT("strict");

    public final String value;

    private YoutubeSearchListSafeSearchEnum(String value) {
        this.value = value;
    }
}
