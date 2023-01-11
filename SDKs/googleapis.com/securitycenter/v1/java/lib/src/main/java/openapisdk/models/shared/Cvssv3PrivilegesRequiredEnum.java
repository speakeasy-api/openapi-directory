package openapisdk.models.shared;


public enum Cvssv3PrivilegesRequiredEnum {
    PRIVILEGES_REQUIRED_UNSPECIFIED("PRIVILEGES_REQUIRED_UNSPECIFIED"),
    PRIVILEGES_REQUIRED_NONE("PRIVILEGES_REQUIRED_NONE"),
    PRIVILEGES_REQUIRED_LOW("PRIVILEGES_REQUIRED_LOW"),
    PRIVILEGES_REQUIRED_HIGH("PRIVILEGES_REQUIRED_HIGH");

    public final String value;

    private Cvssv3PrivilegesRequiredEnum(String value) {
        this.value = value;
    }
}
