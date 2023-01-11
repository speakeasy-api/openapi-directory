package openapisdk.models.shared;


public enum ErrorSourceEnum {
    CARRIER("carrier"),
    ORDER_SOURCE("order_source"),
    SHIPENGINE("shipengine");

    public final String value;

    private ErrorSourceEnum(String value) {
        this.value = value;
    }
}
