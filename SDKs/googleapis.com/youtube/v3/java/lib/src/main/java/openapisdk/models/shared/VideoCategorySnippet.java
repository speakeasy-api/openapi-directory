package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoCategorySnippet
 * Basic details about a video category, such as its localized title.
**/
public class VideoCategorySnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignable")
    public Boolean assignable;
    public VideoCategorySnippet withAssignable(Boolean assignable) {
        this.assignable = assignable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public VideoCategorySnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public VideoCategorySnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}