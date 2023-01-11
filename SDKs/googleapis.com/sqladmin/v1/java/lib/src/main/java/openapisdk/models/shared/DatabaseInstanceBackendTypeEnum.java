package openapisdk.models.shared;


public enum DatabaseInstanceBackendTypeEnum {
    SQL_BACKEND_TYPE_UNSPECIFIED("SQL_BACKEND_TYPE_UNSPECIFIED"),
    FIRST_GEN("FIRST_GEN"),
    SECOND_GEN("SECOND_GEN"),
    EXTERNAL("EXTERNAL");

    public final String value;

    private DatabaseInstanceBackendTypeEnum(String value) {
        this.value = value;
    }
}
