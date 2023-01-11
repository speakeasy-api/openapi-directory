package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullMessage
 * Pull Message. This proto can only be used for tasks in a queue which has PULL type. It currently exists for backwards compatibility with the App Engine Task Queue SDK. This message type maybe returned with methods list and get, when the response view is FULL.
**/
public class PullMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public PullMessage withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public PullMessage withTag(String tag) {
        this.tag = tag;
        return this;
    }
}