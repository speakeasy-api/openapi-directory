package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleNoId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public RuleNoId withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public RuleNoId withValue(String value) {
        this.value = value;
        return this;
    }
}