package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NavigationInfo
 * Information of navigation behavior.
**/
public class NavigationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableForcedRedirect")
    public Boolean enableForcedRedirect;
    public NavigationInfo withEnableForcedRedirect(Boolean enableForcedRedirect) {
        this.enableForcedRedirect = enableForcedRedirect;
        return this;
    }
}