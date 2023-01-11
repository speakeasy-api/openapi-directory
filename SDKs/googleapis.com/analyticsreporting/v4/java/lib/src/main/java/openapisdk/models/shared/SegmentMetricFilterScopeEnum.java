package openapisdk.models.shared;


public enum SegmentMetricFilterScopeEnum {
    UNSPECIFIED_SCOPE("UNSPECIFIED_SCOPE"),
    PRODUCT("PRODUCT"),
    HIT("HIT"),
    SESSION("SESSION"),
    USER("USER");

    public final String value;

    private SegmentMetricFilterScopeEnum(String value) {
        this.value = value;
    }
}
