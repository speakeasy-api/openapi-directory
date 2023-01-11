package openapisdk.models.shared;


public enum CallSummariesEnumCallStateEnum {
    RINGING("ringing"),
    COMPLETED("completed"),
    BUSY("busy"),
    FAIL("fail"),
    NOANSWER("noanswer"),
    CANCELED("canceled"),
    ANSWERED("answered"),
    UNDIALED("undialed");

    public final String value;

    private CallSummariesEnumCallStateEnum(String value) {
        this.value = value;
    }
}
