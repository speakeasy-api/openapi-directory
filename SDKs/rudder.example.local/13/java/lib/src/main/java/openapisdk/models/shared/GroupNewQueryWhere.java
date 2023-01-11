package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupNewQueryWhere {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public String attribute;
    public GroupNewQueryWhere withAttribute(String attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public String comparator;
    public GroupNewQueryWhere withComparator(String comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public GroupNewQueryWhere withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GroupNewQueryWhere withValue(String value) {
        this.value = value;
        return this;
    }
}