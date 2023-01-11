package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGuestAttributesResponse
 * Response for GetGuestAttributes.
**/
public class GetGuestAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestAttributes")
    public GuestAttributes[] guestAttributes;
    public GetGuestAttributesResponse withGuestAttributes(GuestAttributes[] guestAttributes) {
        this.guestAttributes = guestAttributes;
        return this;
    }
}