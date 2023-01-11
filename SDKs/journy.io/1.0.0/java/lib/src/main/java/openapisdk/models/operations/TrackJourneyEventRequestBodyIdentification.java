package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackJourneyEventRequestBodyIdentification
 * Event identification requires a user, account or both
**/
public class TrackJourneyEventRequestBodyIdentification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public TrackJourneyEventRequestBodyIdentificationAccount account;
    public TrackJourneyEventRequestBodyIdentification withAccount(TrackJourneyEventRequestBodyIdentificationAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public TrackJourneyEventRequestBodyIdentificationUser user;
    public TrackJourneyEventRequestBodyIdentification withUser(TrackJourneyEventRequestBodyIdentificationUser user) {
        this.user = user;
        return this;
    }
}