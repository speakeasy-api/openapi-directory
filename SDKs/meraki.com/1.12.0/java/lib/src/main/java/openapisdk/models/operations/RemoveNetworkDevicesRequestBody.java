package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveNetworkDevicesRequestBody {
    @JsonProperty("serial")
    public String serial;
    public RemoveNetworkDevicesRequestBody withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}