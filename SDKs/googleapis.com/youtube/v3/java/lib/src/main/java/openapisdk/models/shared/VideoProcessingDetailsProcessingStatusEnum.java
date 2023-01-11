package openapisdk.models.shared;


public enum VideoProcessingDetailsProcessingStatusEnum {
    PROCESSING("processing"),
    SUCCEEDED("succeeded"),
    FAILED("failed"),
    TERMINATED("terminated");

    public final String value;

    private VideoProcessingDetailsProcessingStatusEnum(String value) {
        this.value = value;
    }
}
