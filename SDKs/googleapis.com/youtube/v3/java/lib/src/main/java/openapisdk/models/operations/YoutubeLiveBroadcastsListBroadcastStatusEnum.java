package openapisdk.models.operations;


public enum YoutubeLiveBroadcastsListBroadcastStatusEnum {
    BROADCAST_STATUS_FILTER_UNSPECIFIED("broadcastStatusFilterUnspecified"),
    ALL("all"),
    ACTIVE("active"),
    UPCOMING("upcoming"),
    COMPLETED("completed");

    public final String value;

    private YoutubeLiveBroadcastsListBroadcastStatusEnum(String value) {
        this.value = value;
    }
}
