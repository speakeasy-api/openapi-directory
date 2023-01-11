package openapisdk.models.shared;


public enum AccessEnum {
    PLAYABLE("playable"),
    PREVIEW("preview"),
    BLOCKED("blocked");

    public final String value;

    private AccessEnum(String value) {
        this.value = value;
    }
}
