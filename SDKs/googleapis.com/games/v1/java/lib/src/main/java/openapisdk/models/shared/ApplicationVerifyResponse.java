package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationVerifyResponse
 * A third party application verification response resource.
**/
public class ApplicationVerifyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternate_player_id")
    public String alternatePlayerId;
    public ApplicationVerifyResponse withAlternatePlayerId(String alternatePlayerId) {
        this.alternatePlayerId = alternatePlayerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ApplicationVerifyResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player_id")
    public String playerId;
    public ApplicationVerifyResponse withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}