package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackJourneyEventRequestBodyIdentificationAccount
 * Account identification requires an accountId, domain or both
**/
public class TrackJourneyEventRequestBodyIdentificationAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public TrackJourneyEventRequestBodyIdentificationAccount withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public TrackJourneyEventRequestBodyIdentificationAccount withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}