package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatacentersId200ApplicationJson {
    @JsonProperty("datacenter")
    public GetDatacentersId200ApplicationJsonDatacenter datacenter;
    public GetDatacentersId200ApplicationJson withDatacenter(GetDatacentersId200ApplicationJsonDatacenter datacenter) {
        this.datacenter = datacenter;
        return this;
    }
}