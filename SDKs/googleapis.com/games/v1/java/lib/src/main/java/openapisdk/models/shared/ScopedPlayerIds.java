package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScopedPlayerIds
 * Scoped player identifiers.
**/
public class ScopedPlayerIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerPlayerKey")
    public String developerPlayerKey;
    public ScopedPlayerIds withDeveloperPlayerKey(String developerPlayerKey) {
        this.developerPlayerKey = developerPlayerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gamePlayerId")
    public String gamePlayerId;
    public ScopedPlayerIds withGamePlayerId(String gamePlayerId) {
        this.gamePlayerId = gamePlayerId;
        return this;
    }
}