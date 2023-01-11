package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Challenge
 * Result message for VerifiedAccess.GenerateChallenge.
**/
public class Challenge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeChallenge")
    public String alternativeChallenge;
    public Challenge withAlternativeChallenge(String alternativeChallenge) {
        this.alternativeChallenge = alternativeChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public Challenge withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
}