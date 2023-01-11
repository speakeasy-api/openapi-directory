package openapisdk.models.shared;


public enum LiveStreamStatusStreamStatusEnum {
    CREATED("created"),
    READY("ready"),
    ACTIVE("active"),
    INACTIVE("inactive"),
    ERROR("error");

    public final String value;

    private LiveStreamStatusStreamStatusEnum(String value) {
        this.value = value;
    }
}
