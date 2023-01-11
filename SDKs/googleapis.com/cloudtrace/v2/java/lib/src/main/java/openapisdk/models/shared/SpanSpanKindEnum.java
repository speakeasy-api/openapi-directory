package openapisdk.models.shared;


public enum SpanSpanKindEnum {
    SPAN_KIND_UNSPECIFIED("SPAN_KIND_UNSPECIFIED"),
    INTERNAL("INTERNAL"),
    SERVER("SERVER"),
    CLIENT("CLIENT"),
    PRODUCER("PRODUCER"),
    CONSUMER("CONSUMER");

    public final String value;

    private SpanSpanKindEnum(String value) {
        this.value = value;
    }
}
