package openapisdk.models.shared;


public enum PlayerStreamerEnumEndedReasonEnum {
    ENDED_VIA_API("ended-via-api"),
    MAX_DURATION_EXCEEDED("max-duration-exceeded"),
    STREAM_DISCONNECTED_BY_SOURCE("stream-disconnected-by-source"),
    UNEXPECTED_FAILURE("unexpected-failure");

    public final String value;

    private PlayerStreamerEnumEndedReasonEnum(String value) {
        this.value = value;
    }
}
