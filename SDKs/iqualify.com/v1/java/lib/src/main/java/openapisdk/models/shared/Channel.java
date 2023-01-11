package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public ChannelGroup group;
    public Channel withGroup(ChannelGroup group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupDiscussion")
    public Boolean groupDiscussion;
    public Channel withGroupDiscussion(Boolean groupDiscussion) {
        this.groupDiscussion = groupDiscussion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBroadcastOnly")
    public Boolean isBroadcastOnly;
    public Channel withIsBroadcastOnly(Boolean isBroadcastOnly) {
        this.isBroadcastOnly = isBroadcastOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateSupport")
    public Boolean privateSupport;
    public Channel withPrivateSupport(Boolean privateSupport) {
        this.privateSupport = privateSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Channel withTitle(String title) {
        this.title = title;
        return this;
    }
}