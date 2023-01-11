package openapisdk.models.shared;


public enum DatabaseInstanceTypeEnum {
    DATABASE_INSTANCE_TYPE_UNSPECIFIED("DATABASE_INSTANCE_TYPE_UNSPECIFIED"),
    DEFAULT_DATABASE("DEFAULT_DATABASE"),
    USER_DATABASE("USER_DATABASE");

    public final String value;

    private DatabaseInstanceTypeEnum(String value) {
        this.value = value;
    }
}
