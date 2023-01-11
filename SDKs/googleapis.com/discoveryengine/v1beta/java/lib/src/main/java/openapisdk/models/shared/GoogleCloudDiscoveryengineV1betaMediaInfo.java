package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaMediaInfo
 * Media-specific user event information.
**/
public class GoogleCloudDiscoveryengineV1betaMediaInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaProgressDuration")
    public String mediaProgressDuration;
    public GoogleCloudDiscoveryengineV1betaMediaInfo withMediaProgressDuration(String mediaProgressDuration) {
        this.mediaProgressDuration = mediaProgressDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaProgressPercentage")
    public Float mediaProgressPercentage;
    public GoogleCloudDiscoveryengineV1betaMediaInfo withMediaProgressPercentage(Float mediaProgressPercentage) {
        this.mediaProgressPercentage = mediaProgressPercentage;
        return this;
    }
}