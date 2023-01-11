package openapisdk.models.shared;


public enum TaskReservationEnumConferenceEventEnum {
    START("start"),
    END("end"),
    JOIN("join"),
    LEAVE("leave"),
    MUTE("mute"),
    HOLD("hold"),
    SPEAKER("speaker");

    public final String value;

    private TaskReservationEnumConferenceEventEnum(String value) {
        this.value = value;
    }
}
