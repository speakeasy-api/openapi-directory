package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosTestLoop
 * A game loop test of an iOS application.
**/
public class IosTestLoop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public IosTestLoop withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
}