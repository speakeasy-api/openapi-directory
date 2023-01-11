package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelatedUrl
 * Metadata for any related URL information.
**/
public class RelatedUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public RelatedUrl withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public RelatedUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}