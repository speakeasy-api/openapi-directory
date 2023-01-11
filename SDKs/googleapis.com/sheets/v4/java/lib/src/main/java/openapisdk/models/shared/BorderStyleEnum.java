package openapisdk.models.shared;


public enum BorderStyleEnum {
    STYLE_UNSPECIFIED("STYLE_UNSPECIFIED"),
    DOTTED("DOTTED"),
    DASHED("DASHED"),
    SOLID("SOLID"),
    SOLID_MEDIUM("SOLID_MEDIUM"),
    SOLID_THICK("SOLID_THICK"),
    NONE("NONE"),
    DOUBLE("DOUBLE");

    public final String value;

    private BorderStyleEnum(String value) {
        this.value = value;
    }
}
