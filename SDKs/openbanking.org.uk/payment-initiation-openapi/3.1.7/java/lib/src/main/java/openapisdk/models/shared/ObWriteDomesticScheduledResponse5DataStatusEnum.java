package openapisdk.models.shared;


public enum ObWriteDomesticScheduledResponse5DataStatusEnum {
    CANCELLED("Cancelled"),
    INITIATION_COMPLETED("InitiationCompleted"),
    INITIATION_FAILED("InitiationFailed"),
    INITIATION_PENDING("InitiationPending");

    public final String value;

    private ObWriteDomesticScheduledResponse5DataStatusEnum(String value) {
        this.value = value;
    }
}
