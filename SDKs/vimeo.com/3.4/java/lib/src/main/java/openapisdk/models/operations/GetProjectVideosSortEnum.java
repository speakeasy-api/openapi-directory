package openapisdk.models.operations;


public enum GetProjectVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    DEFAULT_("default"),
    DURATION("duration"),
    LAST_USER_ACTION_EVENT_DATE("last_user_action_event_date");

    public final String value;

    private GetProjectVideosSortEnum(String value) {
        this.value = value;
    }
}
