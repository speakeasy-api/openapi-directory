package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventFilter
 * Filters events based on exact matches on the CloudEvents attributes.
**/
public class EventFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public String attribute;
    public EventFilter withAttribute(String attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public String operator;
    public EventFilter withOperator(String operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public EventFilter withValue(String value) {
        this.value = value;
        return this;
    }
}