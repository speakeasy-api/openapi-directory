package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveChatMessage
 * A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
**/
public class LiveChatMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorDetails")
    public LiveChatMessageAuthorDetails authorDetails;
    public LiveChatMessage withAuthorDetails(LiveChatMessageAuthorDetails authorDetails) {
        this.authorDetails = authorDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public LiveChatMessage withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LiveChatMessage withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiveChatMessage withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public LiveChatMessageSnippet snippet;
    public LiveChatMessage withSnippet(LiveChatMessageSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
}