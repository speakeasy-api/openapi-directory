package openapisdk.models.shared;


public enum TaskReservationEnumStatusEnum {
    PENDING("pending"),
    ACCEPTED("accepted"),
    REJECTED("rejected"),
    TIMEOUT("timeout"),
    CANCELED("canceled"),
    RESCINDED("rescinded"),
    WRAPPING("wrapping"),
    COMPLETED("completed");

    public final String value;

    private TaskReservationEnumStatusEnum(String value) {
        this.value = value;
    }
}
