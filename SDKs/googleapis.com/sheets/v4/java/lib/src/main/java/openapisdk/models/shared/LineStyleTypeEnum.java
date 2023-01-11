package openapisdk.models.shared;


public enum LineStyleTypeEnum {
    LINE_DASH_TYPE_UNSPECIFIED("LINE_DASH_TYPE_UNSPECIFIED"),
    INVISIBLE("INVISIBLE"),
    CUSTOM("CUSTOM"),
    SOLID("SOLID"),
    DOTTED("DOTTED"),
    MEDIUM_DASHED("MEDIUM_DASHED"),
    MEDIUM_DASHED_DOTTED("MEDIUM_DASHED_DOTTED"),
    LONG_DASHED("LONG_DASHED"),
    LONG_DASHED_DOTTED("LONG_DASHED_DOTTED");

    public final String value;

    private LineStyleTypeEnum(String value) {
        this.value = value;
    }
}
