package openapisdk.models.shared;


public enum ServiceAccountKeyKeyTypeEnum {
    KEY_TYPE_UNSPECIFIED("KEY_TYPE_UNSPECIFIED"),
    USER_MANAGED("USER_MANAGED"),
    SYSTEM_MANAGED("SYSTEM_MANAGED");

    public final String value;

    private ServiceAccountKeyKeyTypeEnum(String value) {
        this.value = value;
    }
}
