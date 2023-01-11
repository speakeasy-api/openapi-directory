package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Endpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public Endpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionType")
    public String connectionType;
    public Endpoint withConnectionType(String connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use")
    public String use;
    public Endpoint withUse(String use) {
        this.use = use;
        return this;
    }
}