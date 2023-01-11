package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SipAddressInput
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
**/
public class SipAddressInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public SipAddressInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SipAddressInput withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SipAddressInput withValue(String value) {
        this.value = value;
        return this;
    }
}