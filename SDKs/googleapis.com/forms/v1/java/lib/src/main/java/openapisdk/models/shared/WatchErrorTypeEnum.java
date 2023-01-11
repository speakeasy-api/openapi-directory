package openapisdk.models.shared;


public enum WatchErrorTypeEnum {
    ERROR_TYPE_UNSPECIFIED("ERROR_TYPE_UNSPECIFIED"),
    PROJECT_NOT_AUTHORIZED("PROJECT_NOT_AUTHORIZED"),
    NO_USER_ACCESS("NO_USER_ACCESS"),
    OTHER_ERRORS("OTHER_ERRORS");

    public final String value;

    private WatchErrorTypeEnum(String value) {
        this.value = value;
    }
}
