package openapisdk.models.shared;


public enum DatabaseTypeEngineEnum {
    DATABASE_ENGINE_UNSPECIFIED("DATABASE_ENGINE_UNSPECIFIED"),
    MYSQL("MYSQL"),
    POSTGRESQL("POSTGRESQL");

    public final String value;

    private DatabaseTypeEngineEnum(String value) {
        this.value = value;
    }
}
