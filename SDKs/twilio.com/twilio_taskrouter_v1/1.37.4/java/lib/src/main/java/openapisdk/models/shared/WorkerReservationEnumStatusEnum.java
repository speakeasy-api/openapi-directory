package openapisdk.models.shared;


public enum WorkerReservationEnumStatusEnum {
    PENDING("pending"),
    ACCEPTED("accepted"),
    REJECTED("rejected"),
    TIMEOUT("timeout"),
    CANCELED("canceled"),
    RESCINDED("rescinded"),
    WRAPPING("wrapping"),
    COMPLETED("completed");

    public final String value;

    private WorkerReservationEnumStatusEnum(String value) {
        this.value = value;
    }
}
