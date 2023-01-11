package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Reviewer
 * Represents the author of the review.
**/
public class Reviewer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Reviewer withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAnonymous")
    public Boolean isAnonymous;
    public Reviewer withIsAnonymous(Boolean isAnonymous) {
        this.isAnonymous = isAnonymous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilePhotoUrl")
    public String profilePhotoUrl;
    public Reviewer withProfilePhotoUrl(String profilePhotoUrl) {
        this.profilePhotoUrl = profilePhotoUrl;
        return this;
    }
}