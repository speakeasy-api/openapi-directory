package openapisdk.models.operations;


public enum YoutubeSearchListEventTypeEnum {
    NONE("none"),
    UPCOMING("upcoming"),
    LIVE("live"),
    COMPLETED("completed");

    public final String value;

    private YoutubeSearchListEventTypeEnum(String value) {
        this.value = value;
    }
}
