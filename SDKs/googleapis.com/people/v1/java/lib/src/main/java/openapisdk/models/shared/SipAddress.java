package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SipAddress
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
**/
public class SipAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedType")
    public String formattedType;
    public SipAddress withFormattedType(String formattedType) {
        this.formattedType = formattedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public SipAddress withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SipAddress withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SipAddress withValue(String value) {
        this.value = value;
        return this;
    }
}