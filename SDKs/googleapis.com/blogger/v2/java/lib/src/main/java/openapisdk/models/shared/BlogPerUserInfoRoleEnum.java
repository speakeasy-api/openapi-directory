package openapisdk.models.shared;


public enum BlogPerUserInfoRoleEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BlogPerUserInfoRoleEnum(String value) {
        this.value = value;
    }
}
