package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddNetworkSwitchStackRequestBody {
    @JsonProperty("serial")
    public String serial;
    public AddNetworkSwitchStackRequestBody withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}