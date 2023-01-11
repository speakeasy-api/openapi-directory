package openapisdk.models.shared;


public enum ConferenceEnumReasonConferenceEndedEnum {
    CONFERENCE_ENDED_VIA_API("conference-ended-via-api"),
    PARTICIPANT_WITH_END_CONFERENCE_ON_EXIT_LEFT("participant-with-end-conference-on-exit-left"),
    PARTICIPANT_WITH_END_CONFERENCE_ON_EXIT_KICKED("participant-with-end-conference-on-exit-kicked"),
    LAST_PARTICIPANT_KICKED("last-participant-kicked"),
    LAST_PARTICIPANT_LEFT("last-participant-left");

    public final String value;

    private ConferenceEnumReasonConferenceEndedEnum(String value) {
        this.value = value;
    }
}
