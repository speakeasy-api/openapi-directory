package openapisdk.models.shared;


public enum StateHistoryStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATED("CREATED"),
    TURNED_IN("TURNED_IN"),
    RETURNED("RETURNED"),
    RECLAIMED_BY_STUDENT("RECLAIMED_BY_STUDENT"),
    STUDENT_EDITED_AFTER_TURN_IN("STUDENT_EDITED_AFTER_TURN_IN");

    public final String value;

    private StateHistoryStateEnum(String value) {
        this.value = value;
    }
}
