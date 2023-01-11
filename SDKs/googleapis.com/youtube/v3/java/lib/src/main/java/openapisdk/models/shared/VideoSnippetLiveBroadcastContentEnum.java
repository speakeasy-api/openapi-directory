package openapisdk.models.shared;


public enum VideoSnippetLiveBroadcastContentEnum {
    NONE("none"),
    UPCOMING("upcoming"),
    LIVE("live"),
    COMPLETED("completed");

    public final String value;

    private VideoSnippetLiveBroadcastContentEnum(String value) {
        this.value = value;
    }
}
