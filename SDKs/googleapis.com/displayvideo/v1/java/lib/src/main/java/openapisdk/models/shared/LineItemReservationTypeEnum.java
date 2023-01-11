package openapisdk.models.shared;


public enum LineItemReservationTypeEnum {
    RESERVATION_TYPE_UNSPECIFIED("RESERVATION_TYPE_UNSPECIFIED"),
    RESERVATION_TYPE_NOT_GUARANTEED("RESERVATION_TYPE_NOT_GUARANTEED"),
    RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED("RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"),
    RESERVATION_TYPE_TAG_GUARANTEED("RESERVATION_TYPE_TAG_GUARANTEED");

    public final String value;

    private LineItemReservationTypeEnum(String value) {
        this.value = value;
    }
}
