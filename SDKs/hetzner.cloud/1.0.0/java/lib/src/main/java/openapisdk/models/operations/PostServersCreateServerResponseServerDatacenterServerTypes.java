package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerDatacenterServerTypes
 * The Server types the Datacenter can handle
**/
public class PostServersCreateServerResponseServerDatacenterServerTypes {
    @JsonProperty("available")
    public Double[] available;
    public PostServersCreateServerResponseServerDatacenterServerTypes withAvailable(Double[] available) {
        this.available = available;
        return this;
    }
    @JsonProperty("available_for_migration")
    public Double[] availableForMigration;
    public PostServersCreateServerResponseServerDatacenterServerTypes withAvailableForMigration(Double[] availableForMigration) {
        this.availableForMigration = availableForMigration;
        return this;
    }
    @JsonProperty("supported")
    public Double[] supported;
    public PostServersCreateServerResponseServerDatacenterServerTypes withSupported(Double[] supported) {
        this.supported = supported;
        return this;
    }
}