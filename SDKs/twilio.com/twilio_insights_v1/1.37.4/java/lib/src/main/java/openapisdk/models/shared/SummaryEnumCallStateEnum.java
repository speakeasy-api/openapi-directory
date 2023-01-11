package openapisdk.models.shared;


public enum SummaryEnumCallStateEnum {
    RINGING("ringing"),
    COMPLETED("completed"),
    BUSY("busy"),
    FAIL("fail"),
    NOANSWER("noanswer"),
    CANCELED("canceled"),
    ANSWERED("answered"),
    UNDIALED("undialed");

    public final String value;

    private SummaryEnumCallStateEnum(String value) {
        this.value = value;
    }
}
