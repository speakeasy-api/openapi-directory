package openapisdk.models.shared;


public enum LineItemFlightFlightDateTypeEnum {
    LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED("LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED"),
    LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED("LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED"),
    LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM("LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"),
    LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER("LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER");

    public final String value;

    private LineItemFlightFlightDateTypeEnum(String value) {
        this.value = value;
    }
}
