package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppManualAppInfo
 * Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
**/
public class AppManualAppInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AppManualAppInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}