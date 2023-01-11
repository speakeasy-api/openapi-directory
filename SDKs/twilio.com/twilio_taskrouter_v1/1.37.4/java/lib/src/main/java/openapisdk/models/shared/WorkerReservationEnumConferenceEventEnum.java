package openapisdk.models.shared;


public enum WorkerReservationEnumConferenceEventEnum {
    START("start"),
    END("end"),
    JOIN("join"),
    LEAVE("leave"),
    MUTE("mute"),
    HOLD("hold"),
    SPEAKER("speaker");

    public final String value;

    private WorkerReservationEnumConferenceEventEnum(String value) {
        this.value = value;
    }
}
