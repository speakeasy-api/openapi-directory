package openapisdk.models.shared;


public enum QueueTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    PULL("PULL"),
    PUSH("PUSH");

    public final String value;

    private QueueTypeEnum(String value) {
        this.value = value;
    }
}
