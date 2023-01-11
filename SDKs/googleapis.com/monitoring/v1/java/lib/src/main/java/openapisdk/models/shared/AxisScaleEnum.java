package openapisdk.models.shared;


public enum AxisScaleEnum {
    SCALE_UNSPECIFIED("SCALE_UNSPECIFIED"),
    LINEAR("LINEAR"),
    LOG10("LOG10");

    public final String value;

    private AxisScaleEnum(String value) {
        this.value = value;
    }
}
