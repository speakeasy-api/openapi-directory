package openapisdk.models.shared;


public enum RecordingEnumRecordingModeEnum {
    DO_NOT_RECORD("do-not-record"),
    RECORD_FROM_RINGING("record-from-ringing"),
    RECORD_FROM_ANSWER("record-from-answer"),
    RECORD_FROM_RINGING_DUAL("record-from-ringing-dual"),
    RECORD_FROM_ANSWER_DUAL("record-from-answer-dual");

    public final String value;

    private RecordingEnumRecordingModeEnum(String value) {
        this.value = value;
    }
}
