package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDatacentersId200ApplicationJsonDatacenterServerTypes
 * The Server types the Datacenter can handle
**/
public class GetDatacentersId200ApplicationJsonDatacenterServerTypes {
    @JsonProperty("available")
    public Double[] available;
    public GetDatacentersId200ApplicationJsonDatacenterServerTypes withAvailable(Double[] available) {
        this.available = available;
        return this;
    }
    @JsonProperty("available_for_migration")
    public Double[] availableForMigration;
    public GetDatacentersId200ApplicationJsonDatacenterServerTypes withAvailableForMigration(Double[] availableForMigration) {
        this.availableForMigration = availableForMigration;
        return this;
    }
    @JsonProperty("supported")
    public Double[] supported;
    public GetDatacentersId200ApplicationJsonDatacenterServerTypes withSupported(Double[] supported) {
        this.supported = supported;
        return this;
    }
}