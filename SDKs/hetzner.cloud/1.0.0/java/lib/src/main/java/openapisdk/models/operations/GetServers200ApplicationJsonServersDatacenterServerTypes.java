package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersDatacenterServerTypes
 * The Server types the Datacenter can handle
**/
public class GetServers200ApplicationJsonServersDatacenterServerTypes {
    @JsonProperty("available")
    public Double[] available;
    public GetServers200ApplicationJsonServersDatacenterServerTypes withAvailable(Double[] available) {
        this.available = available;
        return this;
    }
    @JsonProperty("available_for_migration")
    public Double[] availableForMigration;
    public GetServers200ApplicationJsonServersDatacenterServerTypes withAvailableForMigration(Double[] availableForMigration) {
        this.availableForMigration = availableForMigration;
        return this;
    }
    @JsonProperty("supported")
    public Double[] supported;
    public GetServers200ApplicationJsonServersDatacenterServerTypes withSupported(Double[] supported) {
        this.supported = supported;
        return this;
    }
}