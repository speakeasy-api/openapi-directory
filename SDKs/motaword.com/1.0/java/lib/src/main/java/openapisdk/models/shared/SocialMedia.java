package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SocialMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook_url")
    public String facebookUrl;
    public SocialMedia withFacebookUrl(String facebookUrl) {
        this.facebookUrl = facebookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedIn_url")
    public String linkedInUrl;
    public SocialMedia withLinkedInUrl(String linkedInUrl) {
        this.linkedInUrl = linkedInUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_url")
    public String twitterUrl;
    public SocialMedia withTwitterUrl(String twitterUrl) {
        this.twitterUrl = twitterUrl;
        return this;
    }
}