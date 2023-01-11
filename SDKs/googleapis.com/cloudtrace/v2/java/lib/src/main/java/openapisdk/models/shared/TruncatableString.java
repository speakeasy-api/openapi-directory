package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TruncatableString
 * Represents a string that might be shortened to a specified length.
**/
public class TruncatableString {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncatedByteCount")
    public Integer truncatedByteCount;
    public TruncatableString withTruncatedByteCount(Integer truncatedByteCount) {
        this.truncatedByteCount = truncatedByteCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public TruncatableString withValue(String value) {
        this.value = value;
        return this;
    }
}