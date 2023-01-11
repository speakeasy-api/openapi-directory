package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PlaylistItemSnippet
 * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
**/
public class PlaylistItemSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public PlaylistItemSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTitle")
    public String channelTitle;
    public PlaylistItemSnippet withChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PlaylistItemSnippet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlistId")
    public String playlistId;
    public PlaylistItemSnippet withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public PlaylistItemSnippet withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public PlaylistItemSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public PlaylistItemSnippet withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ThumbnailDetails thumbnails;
    public PlaylistItemSnippet withThumbnails(ThumbnailDetails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PlaylistItemSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoOwnerChannelId")
    public String videoOwnerChannelId;
    public PlaylistItemSnippet withVideoOwnerChannelId(String videoOwnerChannelId) {
        this.videoOwnerChannelId = videoOwnerChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoOwnerChannelTitle")
    public String videoOwnerChannelTitle;
    public PlaylistItemSnippet withVideoOwnerChannelTitle(String videoOwnerChannelTitle) {
        this.videoOwnerChannelTitle = videoOwnerChannelTitle;
        return this;
    }
}