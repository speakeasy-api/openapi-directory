package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateVerificationTokenRequest
 * Request message for Verifications.GenerateVerificationToken.
**/
public class GenerateVerificationTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public GenerateVerificationTokenRequest withLocation(Location location) {
        this.location = location;
        return this;
    }
}