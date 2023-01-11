package openapisdk.models.shared;


public enum TraceSpanSpanKindEnum {
    SPAN_KIND_UNSPECIFIED("SPAN_KIND_UNSPECIFIED"),
    INTERNAL("INTERNAL"),
    SERVER("SERVER"),
    CLIENT("CLIENT"),
    PRODUCER("PRODUCER"),
    CONSUMER("CONSUMER");

    public final String value;

    private TraceSpanSpanKindEnum(String value) {
        this.value = value;
    }
}
