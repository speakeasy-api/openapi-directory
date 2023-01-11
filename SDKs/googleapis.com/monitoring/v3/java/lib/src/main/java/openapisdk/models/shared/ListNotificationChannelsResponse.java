package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNotificationChannelsResponse
 * The ListNotificationChannels response.
**/
public class ListNotificationChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNotificationChannelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationChannels")
    public NotificationChannel[] notificationChannels;
    public ListNotificationChannelsResponse withNotificationChannels(NotificationChannel[] notificationChannels) {
        this.notificationChannels = notificationChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListNotificationChannelsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}