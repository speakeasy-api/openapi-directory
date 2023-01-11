package openapisdk.models.shared;


public enum VersionTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    TYPE_PREVIEW("TYPE_PREVIEW"),
    TYPE_GENERAL_AVAILABILITY("TYPE_GENERAL_AVAILABILITY");

    public final String value;

    private VersionTypeEnum(String value) {
        this.value = value;
    }
}
