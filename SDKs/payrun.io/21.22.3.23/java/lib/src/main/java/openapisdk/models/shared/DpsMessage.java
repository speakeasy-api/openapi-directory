package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DpsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DpsMessage")
    public DpsMessageDpsMessage dpsMessage;
    public DpsMessage withDpsMessage(DpsMessageDpsMessage dpsMessage) {
        this.dpsMessage = dpsMessage;
        return this;
    }
}