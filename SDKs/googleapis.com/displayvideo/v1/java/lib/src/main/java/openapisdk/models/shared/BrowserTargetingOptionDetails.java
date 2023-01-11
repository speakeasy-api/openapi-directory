package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrowserTargetingOptionDetails
 * Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.
**/
public class BrowserTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public BrowserTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}