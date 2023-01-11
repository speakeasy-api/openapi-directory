package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Twitter
 * Twitter data
**/
public class Twitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public TwitterHandleEnum handle;
    public Twitter withHandle(TwitterHandleEnum handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashtags")
    public String[] hashtags;
    public Twitter withHashtags(String[] hashtags) {
        this.hashtags = hashtags;
        return this;
    }
}