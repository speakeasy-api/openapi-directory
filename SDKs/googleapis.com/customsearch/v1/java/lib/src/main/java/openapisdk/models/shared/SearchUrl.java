package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchUrl
 * OpenSearch template and URL.
**/
public class SearchUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public SearchUrl withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SearchUrl withType(String type) {
        this.type = type;
        return this;
    }
}