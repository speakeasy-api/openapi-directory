package openapisdk.models.shared;


public enum PretargetingConfigIncludedUserIdTypesEnum {
    USER_ID_TYPE_UNSPECIFIED("USER_ID_TYPE_UNSPECIFIED"),
    HOSTED_MATCH_DATA("HOSTED_MATCH_DATA"),
    GOOGLE_COOKIE("GOOGLE_COOKIE"),
    DEVICE_ID("DEVICE_ID");

    public final String value;

    private PretargetingConfigIncludedUserIdTypesEnum(String value) {
        this.value = value;
    }
}
