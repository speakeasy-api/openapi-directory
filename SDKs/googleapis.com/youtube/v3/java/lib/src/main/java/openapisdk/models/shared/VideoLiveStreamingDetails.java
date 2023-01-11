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
 * VideoLiveStreamingDetails
 * Details about the live streaming metadata.
**/
public class VideoLiveStreamingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeLiveChatId")
    public String activeLiveChatId;
    public VideoLiveStreamingDetails withActiveLiveChatId(String activeLiveChatId) {
        this.activeLiveChatId = activeLiveChatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("actualEndTime")
    public OffsetDateTime actualEndTime;
    public VideoLiveStreamingDetails withActualEndTime(OffsetDateTime actualEndTime) {
        this.actualEndTime = actualEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("actualStartTime")
    public OffsetDateTime actualStartTime;
    public VideoLiveStreamingDetails withActualStartTime(OffsetDateTime actualStartTime) {
        this.actualStartTime = actualStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrentViewers")
    public String concurrentViewers;
    public VideoLiveStreamingDetails withConcurrentViewers(String concurrentViewers) {
        this.concurrentViewers = concurrentViewers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledEndTime")
    public OffsetDateTime scheduledEndTime;
    public VideoLiveStreamingDetails withScheduledEndTime(OffsetDateTime scheduledEndTime) {
        this.scheduledEndTime = scheduledEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledStartTime")
    public OffsetDateTime scheduledStartTime;
    public VideoLiveStreamingDetails withScheduledStartTime(OffsetDateTime scheduledStartTime) {
        this.scheduledStartTime = scheduledStartTime;
        return this;
    }
}