package openapisdk.models.shared;


public enum CallRecordingEnumSourceEnum {
    DIAL_VERB("DialVerb"),
    CONFERENCE("Conference"),
    OUTBOUND_API("OutboundAPI"),
    TRUNKING("Trunking"),
    RECORD_VERB("RecordVerb"),
    START_CALL_RECORDING_API("StartCallRecordingAPI"),
    START_CONFERENCE_RECORDING_API("StartConferenceRecordingAPI");

    public final String value;

    private CallRecordingEnumSourceEnum(String value) {
        this.value = value;
    }
}
