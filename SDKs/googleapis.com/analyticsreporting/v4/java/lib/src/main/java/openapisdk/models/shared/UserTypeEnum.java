package openapisdk.models.shared;


public enum UserTypeEnum {
    USER_ID_TYPE_UNSPECIFIED("USER_ID_TYPE_UNSPECIFIED"),
    USER_ID("USER_ID"),
    CLIENT_ID("CLIENT_ID");

    public final String value;

    private UserTypeEnum(String value) {
        this.value = value;
    }
}
