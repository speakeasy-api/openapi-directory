package openapisdk.models.operations;


public enum GetVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DEFAULT_("default"),
    DURATION("duration"),
    LAST_USER_ACTION_EVENT_DATE("last_user_action_event_date"),
    LIKES("likes"),
    MODIFIED_TIME("modified_time"),
    PLAYS("plays");

    public final String value;

    private GetVideosSortEnum(String value) {
        this.value = value;
    }
}
