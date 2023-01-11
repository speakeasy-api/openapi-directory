package openapisdk.models.shared;


public enum SuffixOptionEnum {
    OPTION_UNSPECIFIED("OPTION_UNSPECIFIED"),
    UNGUESSABLE("UNGUESSABLE"),
    SHORT_("SHORT"),
    CUSTOM("CUSTOM");

    public final String value;

    private SuffixOptionEnum(String value) {
        this.value = value;
    }
}
