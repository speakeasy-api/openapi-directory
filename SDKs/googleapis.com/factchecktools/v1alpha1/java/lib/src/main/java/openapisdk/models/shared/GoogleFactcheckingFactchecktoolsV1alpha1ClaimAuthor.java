package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor
 * Information about the claim author.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTitle")
    public String jobTitle;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sameAs")
    public String sameAs;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor withSameAs(String sameAs) {
        this.sameAs = sameAs;
        return this;
    }
}