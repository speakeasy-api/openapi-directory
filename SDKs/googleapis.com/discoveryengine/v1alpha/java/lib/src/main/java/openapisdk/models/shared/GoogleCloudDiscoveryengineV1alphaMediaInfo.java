package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaMediaInfo
 * Media-specific user event information.
**/
public class GoogleCloudDiscoveryengineV1alphaMediaInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaProgressDuration")
    public String mediaProgressDuration;
    public GoogleCloudDiscoveryengineV1alphaMediaInfo withMediaProgressDuration(String mediaProgressDuration) {
        this.mediaProgressDuration = mediaProgressDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaProgressPercentage")
    public Float mediaProgressPercentage;
    public GoogleCloudDiscoveryengineV1alphaMediaInfo withMediaProgressPercentage(Float mediaProgressPercentage) {
        this.mediaProgressPercentage = mediaProgressPercentage;
        return this;
    }
}