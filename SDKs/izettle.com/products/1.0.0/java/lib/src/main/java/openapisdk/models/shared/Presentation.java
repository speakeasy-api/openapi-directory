package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Presentation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImageUrls")
    public String[] additionalImageUrls;
    public Presentation withAdditionalImageUrls(String[] additionalImageUrls) {
        this.additionalImageUrls = additionalImageUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayImageUrl")
    public String displayImageUrl;
    public Presentation withDisplayImageUrl(String displayImageUrl) {
        this.displayImageUrl = displayImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaUrls")
    public String[] mediaUrls;
    public Presentation withMediaUrls(String[] mediaUrls) {
        this.mediaUrls = mediaUrls;
        return this;
    }
}