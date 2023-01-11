package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackJourneyEventRequestBodyIdentificationUser
 * User identification requires a userId, email or both
**/
public class TrackJourneyEventRequestBodyIdentificationUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public TrackJourneyEventRequestBodyIdentificationUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public TrackJourneyEventRequestBodyIdentificationUser withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}