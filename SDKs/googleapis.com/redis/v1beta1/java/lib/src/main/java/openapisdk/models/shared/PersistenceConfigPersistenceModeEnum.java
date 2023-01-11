package openapisdk.models.shared;


public enum PersistenceConfigPersistenceModeEnum {
    PERSISTENCE_MODE_UNSPECIFIED("PERSISTENCE_MODE_UNSPECIFIED"),
    DISABLED("DISABLED"),
    RDB("RDB");

    public final String value;

    private PersistenceConfigPersistenceModeEnum(String value) {
        this.value = value;
    }
}
