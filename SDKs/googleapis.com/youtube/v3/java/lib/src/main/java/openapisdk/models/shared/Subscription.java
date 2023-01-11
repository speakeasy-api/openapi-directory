package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subscription
 * A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
**/
public class Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public SubscriptionContentDetails contentDetails;
    public Subscription withContentDetails(SubscriptionContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Subscription withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Subscription withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Subscription withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public SubscriptionSnippet snippet;
    public Subscription withSnippet(SubscriptionSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriberSnippet")
    public SubscriptionSubscriberSnippet subscriberSnippet;
    public Subscription withSubscriberSnippet(SubscriptionSubscriberSnippet subscriberSnippet) {
        this.subscriberSnippet = subscriberSnippet;
        return this;
    }
}