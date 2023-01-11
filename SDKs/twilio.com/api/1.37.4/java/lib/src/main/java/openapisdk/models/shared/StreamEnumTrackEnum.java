package openapisdk.models.shared;


public enum StreamEnumTrackEnum {
    INBOUND_TRACK("inbound_track"),
    OUTBOUND_TRACK("outbound_track"),
    BOTH_TRACKS("both_tracks");

    public final String value;

    private StreamEnumTrackEnum(String value) {
        this.value = value;
    }
}
