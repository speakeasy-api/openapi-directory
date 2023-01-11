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
 * LiveBroadcastSnippet
 * Basic broadcast information.
**/
public class LiveBroadcastSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("actualEndTime")
    public OffsetDateTime actualEndTime;
    public LiveBroadcastSnippet withActualEndTime(OffsetDateTime actualEndTime) {
        this.actualEndTime = actualEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("actualStartTime")
    public OffsetDateTime actualStartTime;
    public LiveBroadcastSnippet withActualStartTime(OffsetDateTime actualStartTime) {
        this.actualStartTime = actualStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public LiveBroadcastSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LiveBroadcastSnippet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefaultBroadcast")
    public Boolean isDefaultBroadcast;
    public LiveBroadcastSnippet withIsDefaultBroadcast(Boolean isDefaultBroadcast) {
        this.isDefaultBroadcast = isDefaultBroadcast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveChatId")
    public String liveChatId;
    public LiveBroadcastSnippet withLiveChatId(String liveChatId) {
        this.liveChatId = liveChatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public LiveBroadcastSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledEndTime")
    public OffsetDateTime scheduledEndTime;
    public LiveBroadcastSnippet withScheduledEndTime(OffsetDateTime scheduledEndTime) {
        this.scheduledEndTime = scheduledEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledStartTime")
    public OffsetDateTime scheduledStartTime;
    public LiveBroadcastSnippet withScheduledStartTime(OffsetDateTime scheduledStartTime) {
        this.scheduledStartTime = scheduledStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ThumbnailDetails thumbnails;
    public LiveBroadcastSnippet withThumbnails(ThumbnailDetails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public LiveBroadcastSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}