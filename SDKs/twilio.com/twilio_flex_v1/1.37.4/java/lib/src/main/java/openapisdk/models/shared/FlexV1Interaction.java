package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FlexV1Interaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Object channel;
    public FlexV1Interaction withChannel(Object channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public FlexV1Interaction withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public Object routing;
    public FlexV1Interaction withRouting(Object routing) {
        this.routing = routing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public FlexV1Interaction withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1Interaction withUrl(String url) {
        this.url = url;
        return this;
    }
}