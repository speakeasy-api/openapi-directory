package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilteringAttribute
 * A representation of the FilteringAttribute resource. Filtering attributes are per event type.
**/
public class FilteringAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public String attribute;
    public FilteringAttribute withAttribute(String attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FilteringAttribute withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathPatternSupported")
    public Boolean pathPatternSupported;
    public FilteringAttribute withPathPatternSupported(Boolean pathPatternSupported) {
        this.pathPatternSupported = pathPatternSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public FilteringAttribute withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}