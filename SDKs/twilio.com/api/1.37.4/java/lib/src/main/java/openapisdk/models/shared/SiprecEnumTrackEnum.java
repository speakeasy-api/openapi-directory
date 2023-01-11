package openapisdk.models.shared;


public enum SiprecEnumTrackEnum {
    INBOUND_TRACK("inbound_track"),
    OUTBOUND_TRACK("outbound_track"),
    BOTH_TRACKS("both_tracks");

    public final String value;

    private SiprecEnumTrackEnum(String value) {
        this.value = value;
    }
}
