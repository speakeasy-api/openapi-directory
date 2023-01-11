package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Social
 * Social networks data
**/
public class Social {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter")
    public Twitter twitter;
    public Social withTwitter(Twitter twitter) {
        this.twitter = twitter;
        return this;
    }
}