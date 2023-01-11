package openapisdk.models.shared;


public enum BookingStatusEnum {
    INFORMATION("information"),
    BOOKED("booked"),
    PENDING("pending"),
    BOTH("both");

    public final String value;

    private BookingStatusEnum(String value) {
        this.value = value;
    }
}
