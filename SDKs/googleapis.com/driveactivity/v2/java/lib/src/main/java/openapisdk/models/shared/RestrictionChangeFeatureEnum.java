package openapisdk.models.shared;


public enum RestrictionChangeFeatureEnum {
    FEATURE_UNSPECIFIED("FEATURE_UNSPECIFIED"),
    SHARING_OUTSIDE_DOMAIN("SHARING_OUTSIDE_DOMAIN"),
    DIRECT_SHARING("DIRECT_SHARING"),
    ITEM_DUPLICATION("ITEM_DUPLICATION"),
    DRIVE_FILE_STREAM("DRIVE_FILE_STREAM");

    public final String value;

    private RestrictionChangeFeatureEnum(String value) {
        this.value = value;
    }
}
