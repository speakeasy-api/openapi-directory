package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationTransferParam
 * Template for application transfer parameters.
**/
public class ApplicationTransferParam {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ApplicationTransferParam withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String[] value;
    public ApplicationTransferParam withValue(String[] value) {
        this.value = value;
        return this;
    }
}