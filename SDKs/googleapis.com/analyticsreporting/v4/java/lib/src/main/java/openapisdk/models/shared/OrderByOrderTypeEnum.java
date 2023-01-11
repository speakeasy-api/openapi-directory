package openapisdk.models.shared;


public enum OrderByOrderTypeEnum {
    ORDER_TYPE_UNSPECIFIED("ORDER_TYPE_UNSPECIFIED"),
    VALUE("VALUE"),
    DELTA("DELTA"),
    SMART("SMART"),
    HISTOGRAM_BUCKET("HISTOGRAM_BUCKET"),
    DIMENSION_AS_INTEGER("DIMENSION_AS_INTEGER");

    public final String value;

    private OrderByOrderTypeEnum(String value) {
        this.value = value;
    }
}
