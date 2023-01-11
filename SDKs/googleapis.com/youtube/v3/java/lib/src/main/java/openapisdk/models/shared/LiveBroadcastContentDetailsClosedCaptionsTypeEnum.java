package openapisdk.models.shared;


public enum LiveBroadcastContentDetailsClosedCaptionsTypeEnum {
    CLOSED_CAPTIONS_TYPE_UNSPECIFIED("closedCaptionsTypeUnspecified"),
    CLOSED_CAPTIONS_DISABLED("closedCaptionsDisabled"),
    CLOSED_CAPTIONS_HTTP_POST("closedCaptionsHttpPost"),
    CLOSED_CAPTIONS_EMBEDDED("closedCaptionsEmbedded");

    public final String value;

    private LiveBroadcastContentDetailsClosedCaptionsTypeEnum(String value) {
        this.value = value;
    }
}
