package openapisdk.models.shared;


public enum InsertionOrderReservationTypeEnum {
    RESERVATION_TYPE_UNSPECIFIED("RESERVATION_TYPE_UNSPECIFIED"),
    RESERVATION_TYPE_NOT_GUARANTEED("RESERVATION_TYPE_NOT_GUARANTEED"),
    RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED("RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"),
    RESERVATION_TYPE_TAG_GUARANTEED("RESERVATION_TYPE_TAG_GUARANTEED");

    public final String value;

    private InsertionOrderReservationTypeEnum(String value) {
        this.value = value;
    }
}
