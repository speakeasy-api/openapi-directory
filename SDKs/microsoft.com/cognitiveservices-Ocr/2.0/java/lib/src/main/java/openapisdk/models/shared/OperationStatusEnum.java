package openapisdk.models.shared;


public enum OperationStatusEnum {
    NOT_STARTED("NotStarted"),
    RUNNING("Running"),
    FAILED("Failed"),
    SUCCEEDED("Succeeded");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
