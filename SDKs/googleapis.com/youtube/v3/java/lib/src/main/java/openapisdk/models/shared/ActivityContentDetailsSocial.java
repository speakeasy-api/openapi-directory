package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsSocial
 * Details about a social network post.
**/
public class ActivityContentDetailsSocial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public ActivityContentDetailsSocial withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public ActivityContentDetailsSocial withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceUrl")
    public String referenceUrl;
    public ActivityContentDetailsSocial withReferenceUrl(String referenceUrl) {
        this.referenceUrl = referenceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsSocial withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ActivityContentDetailsSocialTypeEnum type;
    public ActivityContentDetailsSocial withType(ActivityContentDetailsSocialTypeEnum type) {
        this.type = type;
        return this;
    }
}