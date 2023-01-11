package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNotificationChannelDescriptorsResponse
 * The ListNotificationChannelDescriptors response.
**/
public class ListNotificationChannelDescriptorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelDescriptors")
    public NotificationChannelDescriptor[] channelDescriptors;
    public ListNotificationChannelDescriptorsResponse withChannelDescriptors(NotificationChannelDescriptor[] channelDescriptors) {
        this.channelDescriptors = channelDescriptors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNotificationChannelDescriptorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}