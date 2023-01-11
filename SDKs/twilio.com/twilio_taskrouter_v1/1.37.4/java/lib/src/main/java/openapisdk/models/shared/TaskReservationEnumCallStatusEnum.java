package openapisdk.models.shared;


public enum TaskReservationEnumCallStatusEnum {
    INITIATED("initiated"),
    RINGING("ringing"),
    ANSWERED("answered"),
    COMPLETED("completed");

    public final String value;

    private TaskReservationEnumCallStatusEnum(String value) {
        this.value = value;
    }
}
