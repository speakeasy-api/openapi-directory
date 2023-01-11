package openapisdk.models.shared;


public enum PostgreSqlConnectionProfileNetworkArchitectureEnum {
    NETWORK_ARCHITECTURE_UNSPECIFIED("NETWORK_ARCHITECTURE_UNSPECIFIED"),
    NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER("NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"),
    NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER("NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER");

    public final String value;

    private PostgreSqlConnectionProfileNetworkArchitectureEnum(String value) {
        this.value = value;
    }
}
