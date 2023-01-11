package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoveredParticipant
 * A public identifier for this customer.
**/
public class DiscoveredParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public DiscoveredParticipantCodeEnum code;
    public DiscoveredParticipant withCode(DiscoveredParticipantCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public Boolean email;
    public DiscoveredParticipant withEmail(Boolean email) {
        this.email = email;
        return this;
    }
}