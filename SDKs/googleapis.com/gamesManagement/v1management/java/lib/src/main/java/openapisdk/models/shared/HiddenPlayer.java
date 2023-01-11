package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HiddenPlayer
 * The HiddenPlayer resource.
**/
public class HiddenPlayer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenTimeMillis")
    public String hiddenTimeMillis;
    public HiddenPlayer withHiddenTimeMillis(String hiddenTimeMillis) {
        this.hiddenTimeMillis = hiddenTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public HiddenPlayer withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player")
    public Player player;
    public HiddenPlayer withPlayer(Player player) {
        this.player = player;
        return this;
    }
}