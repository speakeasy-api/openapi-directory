package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Label
 * A key-value pair applied to a given object.
**/
public class Label {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Label withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numValue")
    public String numValue;
    public Label withNumValue(String numValue) {
        this.numValue = numValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strValue")
    public String strValue;
    public Label withStrValue(String strValue) {
        this.strValue = strValue;
        return this;
    }
}