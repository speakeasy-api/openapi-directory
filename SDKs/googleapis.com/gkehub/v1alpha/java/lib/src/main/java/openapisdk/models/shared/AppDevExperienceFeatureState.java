package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppDevExperienceFeatureState
 * State for App Dev Exp Feature.
**/
public class AppDevExperienceFeatureState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkingInstallSucceeded")
    public Status networkingInstallSucceeded;
    public AppDevExperienceFeatureState withNetworkingInstallSucceeded(Status networkingInstallSucceeded) {
        this.networkingInstallSucceeded = networkingInstallSucceeded;
        return this;
    }
}