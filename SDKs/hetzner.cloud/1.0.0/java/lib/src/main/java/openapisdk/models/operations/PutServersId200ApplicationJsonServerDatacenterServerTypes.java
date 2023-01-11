package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerDatacenterServerTypes
 * The Server types the Datacenter can handle
**/
public class PutServersId200ApplicationJsonServerDatacenterServerTypes {
    @JsonProperty("available")
    public Double[] available;
    public PutServersId200ApplicationJsonServerDatacenterServerTypes withAvailable(Double[] available) {
        this.available = available;
        return this;
    }
    @JsonProperty("available_for_migration")
    public Double[] availableForMigration;
    public PutServersId200ApplicationJsonServerDatacenterServerTypes withAvailableForMigration(Double[] availableForMigration) {
        this.availableForMigration = availableForMigration;
        return this;
    }
    @JsonProperty("supported")
    public Double[] supported;
    public PutServersId200ApplicationJsonServerDatacenterServerTypes withSupported(Double[] supported) {
        this.supported = supported;
        return this;
    }
}