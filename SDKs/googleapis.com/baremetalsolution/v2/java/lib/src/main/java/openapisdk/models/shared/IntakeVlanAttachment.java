package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntakeVlanAttachment
 * A GCP vlan attachment.
**/
public class IntakeVlanAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public IntakeVlanAttachment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pairingKey")
    public String pairingKey;
    public IntakeVlanAttachment withPairingKey(String pairingKey) {
        this.pairingKey = pairingKey;
        return this;
    }
}