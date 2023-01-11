package openapisdk.models.shared;


public enum AccountTypeEnum {
    ACCOUNT_TYPE_UNSPECIFIED("ACCOUNT_TYPE_UNSPECIFIED"),
    PERSONAL("PERSONAL"),
    LOCATION_GROUP("LOCATION_GROUP"),
    USER_GROUP("USER_GROUP"),
    ORGANIZATION("ORGANIZATION");

    public final String value;

    private AccountTypeEnum(String value) {
        this.value = value;
    }
}
