package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetagameConfig
 * The metagame config resource
**/
public class MetagameConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentVersion")
    public Integer currentVersion;
    public MetagameConfig withCurrentVersion(Integer currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MetagameConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerLevels")
    public PlayerLevel[] playerLevels;
    public MetagameConfig withPlayerLevels(PlayerLevel[] playerLevels) {
        this.playerLevels = playerLevels;
        return this;
    }
}