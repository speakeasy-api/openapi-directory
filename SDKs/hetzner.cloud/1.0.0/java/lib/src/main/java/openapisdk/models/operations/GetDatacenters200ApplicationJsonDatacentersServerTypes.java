package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDatacenters200ApplicationJsonDatacentersServerTypes
 * The Server types the Datacenter can handle
**/
public class GetDatacenters200ApplicationJsonDatacentersServerTypes {
    @JsonProperty("available")
    public Double[] available;
    public GetDatacenters200ApplicationJsonDatacentersServerTypes withAvailable(Double[] available) {
        this.available = available;
        return this;
    }
    @JsonProperty("available_for_migration")
    public Double[] availableForMigration;
    public GetDatacenters200ApplicationJsonDatacentersServerTypes withAvailableForMigration(Double[] availableForMigration) {
        this.availableForMigration = availableForMigration;
        return this;
    }
    @JsonProperty("supported")
    public Double[] supported;
    public GetDatacenters200ApplicationJsonDatacentersServerTypes withSupported(Double[] supported) {
        this.supported = supported;
        return this;
    }
}