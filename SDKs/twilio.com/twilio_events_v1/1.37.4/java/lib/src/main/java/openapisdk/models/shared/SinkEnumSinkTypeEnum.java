package openapisdk.models.shared;


public enum SinkEnumSinkTypeEnum {
    KINESIS("kinesis"),
    WEBHOOK("webhook"),
    SEGMENT("segment");

    public final String value;

    private SinkEnumSinkTypeEnum(String value) {
        this.value = value;
    }
}
