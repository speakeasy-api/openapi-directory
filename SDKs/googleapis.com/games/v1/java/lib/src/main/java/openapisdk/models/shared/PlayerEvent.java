package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerEvent
 * An event status resource.
**/
public class PlayerEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definitionId")
    public String definitionId;
    public PlayerEvent withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedNumEvents")
    public String formattedNumEvents;
    public PlayerEvent withFormattedNumEvents(String formattedNumEvents) {
        this.formattedNumEvents = formattedNumEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerEvent withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numEvents")
    public String numEvents;
    public PlayerEvent withNumEvents(String numEvents) {
        this.numEvents = numEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerId")
    public String playerId;
    public PlayerEvent withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}