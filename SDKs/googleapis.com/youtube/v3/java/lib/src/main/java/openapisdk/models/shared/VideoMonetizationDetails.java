package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMonetizationDetails
 * Details about monetization of a YouTube Video.
**/
public class VideoMonetizationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public AccessPolicy access;
    public VideoMonetizationDetails withAccess(AccessPolicy access) {
        this.access = access;
        return this;
    }
}