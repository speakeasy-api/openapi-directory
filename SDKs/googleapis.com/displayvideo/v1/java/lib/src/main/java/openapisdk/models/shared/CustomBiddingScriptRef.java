package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingScriptRef
 * The reference to the uploaded custom bidding script file.
**/
public class CustomBiddingScriptRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public CustomBiddingScriptRef withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}