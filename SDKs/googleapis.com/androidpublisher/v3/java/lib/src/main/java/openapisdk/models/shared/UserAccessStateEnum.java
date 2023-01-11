package openapisdk.models.shared;


public enum UserAccessStateEnum {
    ACCESS_STATE_UNSPECIFIED("ACCESS_STATE_UNSPECIFIED"),
    INVITED("INVITED"),
    INVITATION_EXPIRED("INVITATION_EXPIRED"),
    ACCESS_GRANTED("ACCESS_GRANTED"),
    ACCESS_EXPIRED("ACCESS_EXPIRED");

    public final String value;

    private UserAccessStateEnum(String value) {
        this.value = value;
    }
}
