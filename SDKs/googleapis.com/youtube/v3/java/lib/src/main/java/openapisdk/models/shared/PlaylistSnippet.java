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
 * PlaylistSnippet
 * Basic details about a playlist, including title, description and thumbnails.
**/
public class PlaylistSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public PlaylistSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTitle")
    public String channelTitle;
    public PlaylistSnippet withChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public PlaylistSnippet withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PlaylistSnippet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localized")
    public PlaylistLocalization localized;
    public PlaylistSnippet withLocalized(PlaylistLocalization localized) {
        this.localized = localized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public PlaylistSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PlaylistSnippet withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailVideoId")
    public String thumbnailVideoId;
    public PlaylistSnippet withThumbnailVideoId(String thumbnailVideoId) {
        this.thumbnailVideoId = thumbnailVideoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ThumbnailDetails thumbnails;
    public PlaylistSnippet withThumbnails(ThumbnailDetails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PlaylistSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}