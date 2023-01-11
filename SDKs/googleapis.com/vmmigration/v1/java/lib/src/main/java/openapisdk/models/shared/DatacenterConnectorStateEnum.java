package openapisdk.models.shared;


public enum DatacenterConnectorStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    OFFLINE("OFFLINE"),
    FAILED("FAILED"),
    ACTIVE("ACTIVE");

    public final String value;

    private DatacenterConnectorStateEnum(String value) {
        this.value = value;
    }
}
