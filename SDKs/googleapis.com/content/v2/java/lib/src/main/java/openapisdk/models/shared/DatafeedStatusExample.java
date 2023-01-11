package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedStatusExample
 * An example occurrence for a particular error.
**/
public class DatafeedStatusExample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public DatafeedStatusExample withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineNumber")
    public String lineNumber;
    public DatafeedStatusExample withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DatafeedStatusExample withValue(String value) {
        this.value = value;
        return this;
    }
}