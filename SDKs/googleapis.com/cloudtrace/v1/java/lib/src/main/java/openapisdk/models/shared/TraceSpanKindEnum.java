package openapisdk.models.shared;


public enum TraceSpanKindEnum {
    SPAN_KIND_UNSPECIFIED("SPAN_KIND_UNSPECIFIED"),
    RPC_SERVER("RPC_SERVER"),
    RPC_CLIENT("RPC_CLIENT");

    public final String value;

    private TraceSpanKindEnum(String value) {
        this.value = value;
    }
}
