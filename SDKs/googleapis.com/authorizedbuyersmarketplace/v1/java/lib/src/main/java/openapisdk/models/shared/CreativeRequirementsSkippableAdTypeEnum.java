package openapisdk.models.shared;


public enum CreativeRequirementsSkippableAdTypeEnum {
    SKIPPABLE_AD_TYPE_UNSPECIFIED("SKIPPABLE_AD_TYPE_UNSPECIFIED"),
    SKIPPABLE("SKIPPABLE"),
    INSTREAM_SELECT("INSTREAM_SELECT"),
    NOT_SKIPPABLE("NOT_SKIPPABLE"),
    ANY("ANY");

    public final String value;

    private CreativeRequirementsSkippableAdTypeEnum(String value) {
        this.value = value;
    }
}
