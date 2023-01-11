package openapisdk.models.shared;


public enum ConferenceParticipantEnumCallStatusEnum {
    ANSWERED("answered"),
    COMPLETED("completed"),
    BUSY("busy"),
    FAIL("fail"),
    NOANSWER("noanswer"),
    RINGING("ringing"),
    CANCELED("canceled");

    public final String value;

    private ConferenceParticipantEnumCallStatusEnum(String value) {
        this.value = value;
    }
}
