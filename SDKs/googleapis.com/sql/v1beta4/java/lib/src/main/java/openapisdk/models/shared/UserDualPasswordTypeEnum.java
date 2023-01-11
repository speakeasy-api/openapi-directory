package openapisdk.models.shared;


public enum UserDualPasswordTypeEnum {
    DUAL_PASSWORD_TYPE_UNSPECIFIED("DUAL_PASSWORD_TYPE_UNSPECIFIED"),
    NO_MODIFY_DUAL_PASSWORD("NO_MODIFY_DUAL_PASSWORD"),
    NO_DUAL_PASSWORD("NO_DUAL_PASSWORD"),
    DUAL_PASSWORD("DUAL_PASSWORD");

    public final String value;

    private UserDualPasswordTypeEnum(String value) {
        this.value = value;
    }
}
