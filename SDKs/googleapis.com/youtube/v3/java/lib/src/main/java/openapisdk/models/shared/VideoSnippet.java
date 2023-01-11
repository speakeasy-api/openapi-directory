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
 * VideoSnippet
 * Basic details about a video, including title, description, uploader, thumbnails and category.
**/
public class VideoSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public VideoSnippet withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public VideoSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTitle")
    public String channelTitle;
    public VideoSnippet withChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAudioLanguage")
    public String defaultAudioLanguage;
    public VideoSnippet withDefaultAudioLanguage(String defaultAudioLanguage) {
        this.defaultAudioLanguage = defaultAudioLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public VideoSnippet withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VideoSnippet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveBroadcastContent")
    public VideoSnippetLiveBroadcastContentEnum liveBroadcastContent;
    public VideoSnippet withLiveBroadcastContent(VideoSnippetLiveBroadcastContentEnum liveBroadcastContent) {
        this.liveBroadcastContent = liveBroadcastContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localized")
    public VideoLocalization localized;
    public VideoSnippet withLocalized(VideoLocalization localized) {
        this.localized = localized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public VideoSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public VideoSnippet withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ThumbnailDetails thumbnails;
    public VideoSnippet withThumbnails(ThumbnailDetails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public VideoSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}