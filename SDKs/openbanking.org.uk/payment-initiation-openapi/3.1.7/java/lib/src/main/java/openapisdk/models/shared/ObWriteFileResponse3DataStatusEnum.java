package openapisdk.models.shared;


public enum ObWriteFileResponse3DataStatusEnum {
    INITIATION_COMPLETED("InitiationCompleted"),
    INITIATION_FAILED("InitiationFailed"),
    INITIATION_PENDING("InitiationPending");

    public final String value;

    private ObWriteFileResponse3DataStatusEnum(String value) {
        this.value = value;
    }
}
