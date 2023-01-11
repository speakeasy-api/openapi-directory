package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevocationDetails
 * Describes fields that are relavent to the revocation of a Certificate.
**/
public class RevocationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationState")
    public RevocationDetailsRevocationStateEnum revocationState;
    public RevocationDetails withRevocationState(RevocationDetailsRevocationStateEnum revocationState) {
        this.revocationState = revocationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationTime")
    public String revocationTime;
    public RevocationDetails withRevocationTime(String revocationTime) {
        this.revocationTime = revocationTime;
        return this;
    }
}