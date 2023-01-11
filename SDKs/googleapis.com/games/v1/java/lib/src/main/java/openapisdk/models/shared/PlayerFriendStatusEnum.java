package openapisdk.models.shared;


public enum PlayerFriendStatusEnum {
    FRIEND_STATUS_UNSPECIFIED("FRIEND_STATUS_UNSPECIFIED"),
    NO_RELATIONSHIP("NO_RELATIONSHIP"),
    FRIEND("FRIEND");

    public final String value;

    private PlayerFriendStatusEnum(String value) {
        this.value = value;
    }
}
