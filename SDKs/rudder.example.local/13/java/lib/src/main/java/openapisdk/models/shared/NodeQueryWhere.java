package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeQueryWhere {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public String attribute;
    public NodeQueryWhere withAttribute(String attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public String comparator;
    public NodeQueryWhere withComparator(String comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public NodeQueryWhere withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public NodeQueryWhere withValue(String value) {
        this.value = value;
        return this;
    }
}