package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaylistsResponsePlaylists
 * A playlist
**/
public class PlaylistsResponsePlaylists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PlaylistsResponsePlaylists withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_count")
    public Long episodeCount;
    public PlaylistsResponsePlaylists withEpisodeCount(Long episodeCount) {
        this.episodeCount = episodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PlaylistsResponsePlaylists withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PlaylistsResponsePlaylists withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_timestamp_ms")
    public Long lastTimestampMs;
    public PlaylistsResponsePlaylists withLastTimestampMs(Long lastTimestampMs) {
        this.lastTimestampMs = lastTimestampMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public PlaylistsResponsePlaylists withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlaylistsResponsePlaylists withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcast_count")
    public Long podcastCount;
    public PlaylistsResponsePlaylists withPodcastCount(Long podcastCount) {
        this.podcastCount = podcastCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PlaylistsResponsePlaylists withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public PlaylistVisibilityFieldEnum visibility;
    public PlaylistsResponsePlaylists withVisibility(PlaylistVisibilityFieldEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}