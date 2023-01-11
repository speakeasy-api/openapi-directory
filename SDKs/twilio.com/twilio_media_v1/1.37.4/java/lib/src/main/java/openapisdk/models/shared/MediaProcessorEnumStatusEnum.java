package openapisdk.models.shared;


public enum MediaProcessorEnumStatusEnum {
    FAILED("failed"),
    STARTED("started"),
    ENDED("ended");

    public final String value;

    private MediaProcessorEnumStatusEnum(String value) {
        this.value = value;
    }
}
