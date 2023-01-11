package openapisdk.models.shared;


public enum UserInvitationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    NOT_YET_SENT("NOT_YET_SENT"),
    INVITED("INVITED"),
    ACCEPTED("ACCEPTED"),
    DECLINED("DECLINED");

    public final String value;

    private UserInvitationStateEnum(String value) {
        this.value = value;
    }
}
