package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AclRuleScope
 * The extent to which calendar access is granted by this ACL rule.
**/
public class AclRuleScope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AclRuleScope withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public AclRuleScope withValue(String value) {
        this.value = value;
        return this;
    }
}