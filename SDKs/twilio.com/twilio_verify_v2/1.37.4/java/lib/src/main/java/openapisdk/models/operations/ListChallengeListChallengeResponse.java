package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChallengeListChallengeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenges")
    public openapisdk.models.shared.VerifyV2ServiceEntityChallenge[] challenges;
    public ListChallengeListChallengeResponse withChallenges(openapisdk.models.shared.VerifyV2ServiceEntityChallenge[] challenges) {
        this.challenges = challenges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListChallengeListChallengeResponseMeta meta;
    public ListChallengeListChallengeResponse withMeta(ListChallengeListChallengeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}