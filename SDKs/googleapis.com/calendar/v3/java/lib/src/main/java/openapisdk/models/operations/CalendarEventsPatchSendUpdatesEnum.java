package openapisdk.models.operations;


public enum CalendarEventsPatchSendUpdatesEnum {
    ALL("all"),
    EXTERNAL_ONLY("externalOnly"),
    NONE("none");

    public final String value;

    private CalendarEventsPatchSendUpdatesEnum(String value) {
        this.value = value;
    }
}
