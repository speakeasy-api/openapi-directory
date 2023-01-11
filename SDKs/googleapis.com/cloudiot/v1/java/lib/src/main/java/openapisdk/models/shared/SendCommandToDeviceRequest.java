package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendCommandToDeviceRequest
 * Request for `SendCommandToDevice`.
**/
public class SendCommandToDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryData")
    public String binaryData;
    public SendCommandToDeviceRequest withBinaryData(String binaryData) {
        this.binaryData = binaryData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subfolder")
    public String subfolder;
    public SendCommandToDeviceRequest withSubfolder(String subfolder) {
        this.subfolder = subfolder;
        return this;
    }
}