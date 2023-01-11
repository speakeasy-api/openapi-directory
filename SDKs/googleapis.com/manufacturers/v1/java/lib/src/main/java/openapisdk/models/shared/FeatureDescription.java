package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeatureDescription
 * A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
**/
public class FeatureDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;
    public FeatureDescription withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public FeatureDescription withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public FeatureDescription withText(String text) {
        this.text = text;
        return this;
    }
}