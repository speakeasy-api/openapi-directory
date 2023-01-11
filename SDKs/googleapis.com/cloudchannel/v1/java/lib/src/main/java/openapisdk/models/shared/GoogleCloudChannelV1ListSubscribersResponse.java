package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListSubscribersResponse
 * Response Message for ListSubscribers.
**/
public class GoogleCloudChannelV1ListSubscribersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListSubscribersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccounts")
    public String[] serviceAccounts;
    public GoogleCloudChannelV1ListSubscribersResponse withServiceAccounts(String[] serviceAccounts) {
        this.serviceAccounts = serviceAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public GoogleCloudChannelV1ListSubscribersResponse withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}