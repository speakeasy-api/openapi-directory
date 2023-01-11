package openapisdk.models.operations;


public enum GetCallsStatusEnum {
    STARTED("started"),
    RINGING("ringing"),
    ANSWERED("answered"),
    MACHINE("machine"),
    COMPLETED("completed"),
    BUSY("busy"),
    CANCELLED("cancelled"),
    FAILED("failed"),
    REJECTED("rejected"),
    TIMEOUT("timeout"),
    UNANSWERED("unanswered");

    public final String value;

    private GetCallsStatusEnum(String value) {
        this.value = value;
    }
}
