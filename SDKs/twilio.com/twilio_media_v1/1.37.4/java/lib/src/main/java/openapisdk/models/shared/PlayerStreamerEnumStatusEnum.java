package openapisdk.models.shared;


public enum PlayerStreamerEnumStatusEnum {
    CREATED("created"),
    STARTED("started"),
    ENDED("ended"),
    FAILED("failed");

    public final String value;

    private PlayerStreamerEnumStatusEnum(String value) {
        this.value = value;
    }
}
