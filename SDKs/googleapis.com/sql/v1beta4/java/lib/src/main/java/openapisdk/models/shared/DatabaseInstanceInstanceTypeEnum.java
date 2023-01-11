package openapisdk.models.shared;


public enum DatabaseInstanceInstanceTypeEnum {
    SQL_INSTANCE_TYPE_UNSPECIFIED("SQL_INSTANCE_TYPE_UNSPECIFIED"),
    CLOUD_SQL_INSTANCE("CLOUD_SQL_INSTANCE"),
    ON_PREMISES_INSTANCE("ON_PREMISES_INSTANCE"),
    READ_REPLICA_INSTANCE("READ_REPLICA_INSTANCE");

    public final String value;

    private DatabaseInstanceInstanceTypeEnum(String value) {
        this.value = value;
    }
}
