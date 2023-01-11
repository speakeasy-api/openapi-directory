package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlaylistResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PlaylistResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PlaylistResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PlaylistResponse withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PlaylistItem[] items;
    public PlaylistResponse withItems(PlaylistItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_timestamp_ms")
    public Long lastTimestampMs;
    public PlaylistResponse withLastTimestampMs(Long lastTimestampMs) {
        this.lastTimestampMs = lastTimestampMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public PlaylistResponse withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlaylistResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PlaylistResponse withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public PlaylistResponse withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PlaylistResponseTypeEnum type;
    public PlaylistResponse withType(PlaylistResponseTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public PlaylistVisibilityFieldEnum visibility;
    public PlaylistResponse withVisibility(PlaylistVisibilityFieldEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}