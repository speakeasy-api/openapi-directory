package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaylistItem
 * An item in a playlist
**/
public class PlaylistItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_at_ms")
    public Long addedAtMs;
    public PlaylistItem withAddedAtMs(Long addedAtMs) {
        this.addedAtMs = addedAtMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public PlaylistItem withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PlaylistItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public PlaylistItem withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PlaylistItemTypeEnum type;
    public PlaylistItem withType(PlaylistItemTypeEnum type) {
        this.type = type;
        return this;
    }
}