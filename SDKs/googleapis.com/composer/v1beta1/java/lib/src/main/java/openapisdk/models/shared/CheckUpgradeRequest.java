package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckUpgradeRequest
 * Request to check whether image upgrade will succeed.
**/
public class CheckUpgradeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageVersion")
    public String imageVersion;
    public CheckUpgradeRequest withImageVersion(String imageVersion) {
        this.imageVersion = imageVersion;
        return this;
    }
}