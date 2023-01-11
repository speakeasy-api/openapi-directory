package openapisdk.models.shared;


public enum MemberStateEnum {
    INVITED("invited"),
    JOINED("joined"),
    LEFT("left"),
    UNKNOWN("unknown");

    public final String value;

    private MemberStateEnum(String value) {
        this.value = value;
    }
}
