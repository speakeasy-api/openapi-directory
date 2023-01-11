package openapisdk.models.shared;


public enum CancelBookingResponseReasonEnum {
    ALREADY_CANCELLED("ALREADY_CANCELLED"),
    NOT_CANCELLABLE("NOT_CANCELLABLE");

    public final String value;

    private CancelBookingResponseReasonEnum(String value) {
        this.value = value;
    }
}
