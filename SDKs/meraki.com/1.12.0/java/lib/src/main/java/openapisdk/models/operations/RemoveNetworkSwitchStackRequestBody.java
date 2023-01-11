package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveNetworkSwitchStackRequestBody {
    @JsonProperty("serial")
    public String serial;
    public RemoveNetworkSwitchStackRequestBody withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}