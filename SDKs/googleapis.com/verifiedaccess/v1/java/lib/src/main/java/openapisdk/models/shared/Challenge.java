package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Challenge
 * Result message for VerifiedAccess.CreateChallenge.
**/
public class Challenge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeChallenge")
    public SignedData alternativeChallenge;
    public Challenge withAlternativeChallenge(SignedData alternativeChallenge) {
        this.alternativeChallenge = alternativeChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public SignedData challenge;
    public Challenge withChallenge(SignedData challenge) {
        this.challenge = challenge;
        return this;
    }
}