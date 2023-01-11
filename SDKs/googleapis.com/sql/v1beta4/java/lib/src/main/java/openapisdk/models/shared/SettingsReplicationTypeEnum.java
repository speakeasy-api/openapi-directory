package openapisdk.models.shared;


public enum SettingsReplicationTypeEnum {
    SQL_REPLICATION_TYPE_UNSPECIFIED("SQL_REPLICATION_TYPE_UNSPECIFIED"),
    SYNCHRONOUS("SYNCHRONOUS"),
    ASYNCHRONOUS("ASYNCHRONOUS");

    public final String value;

    private SettingsReplicationTypeEnum(String value) {
        this.value = value;
    }
}
