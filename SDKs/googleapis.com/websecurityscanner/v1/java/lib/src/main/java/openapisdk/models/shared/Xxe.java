package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Xxe
 * Information reported for an XXE.
**/
public class Xxe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadLocation")
    public XxePayloadLocationEnum payloadLocation;
    public Xxe withPayloadLocation(XxePayloadLocationEnum payloadLocation) {
        this.payloadLocation = payloadLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadValue")
    public String payloadValue;
    public Xxe withPayloadValue(String payloadValue) {
        this.payloadValue = payloadValue;
        return this;
    }
}