package openapisdk.models.shared;


public enum BookingStatusItineraryTypeEnum {
    WAITING("WAITING"),
    CONFIRMED("CONFIRMED"),
    PENDING("PENDING"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED"),
    AMENDED("AMENDED"),
    PENDING_AMEND("PENDING_AMEND");

    public final String value;

    private BookingStatusItineraryTypeEnum(String value) {
        this.value = value;
    }
}
