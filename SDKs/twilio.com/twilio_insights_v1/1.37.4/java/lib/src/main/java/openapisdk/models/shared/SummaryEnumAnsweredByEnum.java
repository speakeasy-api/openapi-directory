package openapisdk.models.shared;


public enum SummaryEnumAnsweredByEnum {
    UNKNOWN("unknown"),
    MACHINE_START("machine_start"),
    MACHINE_END_BEEP("machine_end_beep"),
    MACHINE_END_SILENCE("machine_end_silence"),
    MACHINE_END_OTHER("machine_end_other"),
    HUMAN("human"),
    FAX("fax");

    public final String value;

    private SummaryEnumAnsweredByEnum(String value) {
        this.value = value;
    }
}
