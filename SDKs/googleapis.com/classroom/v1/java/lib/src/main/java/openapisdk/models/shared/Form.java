package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Form
 * Google Forms item.
**/
public class Form {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formUrl")
    public String formUrl;
    public Form withFormUrl(String formUrl) {
        this.formUrl = formUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseUrl")
    public String responseUrl;
    public Form withResponseUrl(String responseUrl) {
        this.responseUrl = responseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUrl")
    public String thumbnailUrl;
    public Form withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Form withTitle(String title) {
        this.title = title;
        return this;
    }
}