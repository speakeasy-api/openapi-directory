package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelContentDetailsRelatedPlaylists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favorites")
    public String favorites;
    public ChannelContentDetailsRelatedPlaylists withFavorites(String favorites) {
        this.favorites = favorites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likes")
    public String likes;
    public ChannelContentDetailsRelatedPlaylists withLikes(String likes) {
        this.likes = likes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploads")
    public String uploads;
    public ChannelContentDetailsRelatedPlaylists withUploads(String uploads) {
        this.uploads = uploads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchHistory")
    public String watchHistory;
    public ChannelContentDetailsRelatedPlaylists withWatchHistory(String watchHistory) {
        this.watchHistory = watchHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchLater")
    public String watchLater;
    public ChannelContentDetailsRelatedPlaylists withWatchLater(String watchLater) {
        this.watchLater = watchLater;
        return this;
    }
}