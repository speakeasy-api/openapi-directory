package openapisdk.models.shared;


public enum InterpolationPointTypeEnum {
    INTERPOLATION_POINT_TYPE_UNSPECIFIED("INTERPOLATION_POINT_TYPE_UNSPECIFIED"),
    MIN("MIN"),
    MAX("MAX"),
    NUMBER("NUMBER"),
    PERCENT("PERCENT"),
    PERCENTILE("PERCENTILE");

    public final String value;

    private InterpolationPointTypeEnum(String value) {
        this.value = value;
    }
}
