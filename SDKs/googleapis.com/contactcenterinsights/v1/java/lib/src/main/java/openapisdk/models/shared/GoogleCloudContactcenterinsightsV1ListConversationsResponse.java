package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ListConversationsResponse
 * The response of listing conversations.
**/
public class GoogleCloudContactcenterinsightsV1ListConversationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public GoogleCloudContactcenterinsightsV1Conversation[] conversations;
    public GoogleCloudContactcenterinsightsV1ListConversationsResponse withConversations(GoogleCloudContactcenterinsightsV1Conversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudContactcenterinsightsV1ListConversationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}