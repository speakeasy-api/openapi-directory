package openapisdk.models.shared;


public enum BookingStatusItemTypeEnum {
    WAITING("WAITING"),
    CONFIRMED("CONFIRMED"),
    UNAVAILABLE("UNAVAILABLE"),
    PENDING("PENDING"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED"),
    EXPIRED("EXPIRED"),
    AMENDED("AMENDED"),
    PENDING_AMEND("PENDING_AMEND"),
    REJECTED("REJECTED"),
    ON_HOLD("ON_HOLD");

    public final String value;

    private BookingStatusItemTypeEnum(String value) {
        this.value = value;
    }
}
