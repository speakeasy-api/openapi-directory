package openapisdk.models.shared;


public enum CancelBookingQuoteResponseStatusEnum {
    CANCELLABLE("CANCELLABLE"),
    CANCELLED("CANCELLED"),
    NOT_CANCELLABLE("NOT_CANCELLABLE");

    public final String value;

    private CancelBookingQuoteResponseStatusEnum(String value) {
        this.value = value;
    }
}
