package openapisdk.models.shared;


public enum WritablePowerFeedStatusEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    FAILED("failed");

    public final String value;

    private WritablePowerFeedStatusEnum(String value) {
        this.value = value;
    }
}
