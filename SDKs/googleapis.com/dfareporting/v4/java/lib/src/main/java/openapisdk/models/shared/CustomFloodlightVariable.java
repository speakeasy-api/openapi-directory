package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFloodlightVariable
 * A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate.
**/
public class CustomFloodlightVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomFloodlightVariable withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomFloodlightVariableTypeEnum type;
    public CustomFloodlightVariable withType(CustomFloodlightVariableTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CustomFloodlightVariable withValue(String value) {
        this.value = value;
        return this;
    }
}