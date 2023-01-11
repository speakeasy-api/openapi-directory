package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HiuSubscriptionNotificationEvent {
    @JsonProperty("category")
    public SubscriptionCategoryEnum category;
    public HiuSubscriptionNotificationEvent withCategory(SubscriptionCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("content")
    public HiuSubscriptionEventContent content;
    public HiuSubscriptionNotificationEvent withContent(HiuSubscriptionEventContent content) {
        this.content = content;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public HiuSubscriptionNotificationEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("published")
    public OffsetDateTime published;
    public HiuSubscriptionNotificationEvent withPublished(OffsetDateTime published) {
        this.published = published;
        return this;
    }
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public HiuSubscriptionNotificationEvent withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}