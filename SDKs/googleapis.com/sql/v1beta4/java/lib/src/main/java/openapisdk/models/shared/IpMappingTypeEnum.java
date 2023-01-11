package openapisdk.models.shared;


public enum IpMappingTypeEnum {
    SQL_IP_ADDRESS_TYPE_UNSPECIFIED("SQL_IP_ADDRESS_TYPE_UNSPECIFIED"),
    PRIMARY("PRIMARY"),
    OUTGOING("OUTGOING"),
    PRIVATE_("PRIVATE"),
    MIGRATED1_ST_GEN("MIGRATED_1ST_GEN");

    public final String value;

    private IpMappingTypeEnum(String value) {
        this.value = value;
    }
}
