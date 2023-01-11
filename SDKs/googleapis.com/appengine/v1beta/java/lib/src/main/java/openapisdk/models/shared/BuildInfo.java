package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildInfo
 * Google Cloud Build information.
**/
public class BuildInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudBuildId")
    public String cloudBuildId;
    public BuildInfo withCloudBuildId(String cloudBuildId) {
        this.cloudBuildId = cloudBuildId;
        return this;
    }
}