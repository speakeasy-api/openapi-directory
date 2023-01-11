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
 * ChannelContentOwnerDetails
 * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
**/
public class ChannelContentOwnerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOwner")
    public String contentOwner;
    public ChannelContentOwnerDetails withContentOwner(String contentOwner) {
        this.contentOwner = contentOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeLinked")
    public OffsetDateTime timeLinked;
    public ChannelContentOwnerDetails withTimeLinked(OffsetDateTime timeLinked) {
        this.timeLinked = timeLinked;
        return this;
    }
}