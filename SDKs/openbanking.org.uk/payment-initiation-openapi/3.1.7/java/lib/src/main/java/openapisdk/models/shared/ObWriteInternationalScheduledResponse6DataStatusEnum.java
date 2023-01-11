package openapisdk.models.shared;


public enum ObWriteInternationalScheduledResponse6DataStatusEnum {
    CANCELLED("Cancelled"),
    INITIATION_COMPLETED("InitiationCompleted"),
    INITIATION_FAILED("InitiationFailed"),
    INITIATION_PENDING("InitiationPending");

    public final String value;

    private ObWriteInternationalScheduledResponse6DataStatusEnum(String value) {
        this.value = value;
    }
}
