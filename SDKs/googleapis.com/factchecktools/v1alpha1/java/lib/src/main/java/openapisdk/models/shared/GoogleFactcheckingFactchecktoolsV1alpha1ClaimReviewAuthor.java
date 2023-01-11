package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor
 * Information about the claim review author.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor withName(String name) {
        this.name = name;
        return this;
    }
}