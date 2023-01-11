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
 * SubscriptionSnippet
 * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
**/
public class SubscriptionSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public SubscriptionSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTitle")
    public String channelTitle;
    public SubscriptionSnippet withChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SubscriptionSnippet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public SubscriptionSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public SubscriptionSnippet withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ThumbnailDetails thumbnails;
    public SubscriptionSnippet withThumbnails(ThumbnailDetails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SubscriptionSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}