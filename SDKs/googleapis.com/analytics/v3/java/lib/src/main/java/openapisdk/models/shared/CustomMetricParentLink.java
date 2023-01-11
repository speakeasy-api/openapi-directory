package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomMetricParentLink
 * Parent link for the custom metric. Points to the property to which the custom metric belongs.
**/
public class CustomMetricParentLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CustomMetricParentLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CustomMetricParentLink withType(String type) {
        this.type = type;
        return this;
    }
}