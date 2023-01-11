package openapisdk.models.shared;


public enum WorkerReservationEnumCallStatusEnum {
    INITIATED("initiated"),
    RINGING("ringing"),
    ANSWERED("answered"),
    COMPLETED("completed");

    public final String value;

    private WorkerReservationEnumCallStatusEnum(String value) {
        this.value = value;
    }
}
