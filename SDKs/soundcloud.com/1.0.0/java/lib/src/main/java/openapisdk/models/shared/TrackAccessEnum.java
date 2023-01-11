package openapisdk.models.shared;


public enum TrackAccessEnum {
    PLAYABLE("playable"),
    PREVIEW("preview"),
    BLOCKED("blocked"),
    NULL_("null");

    public final String value;

    private TrackAccessEnum(String value) {
        this.value = value;
    }
}
