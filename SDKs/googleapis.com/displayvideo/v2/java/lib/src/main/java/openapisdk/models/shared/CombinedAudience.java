package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CombinedAudience
 * Describes a combined audience resource.
**/
public class CombinedAudience {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combinedAudienceId")
    public String combinedAudienceId;
    public CombinedAudience withCombinedAudienceId(String combinedAudienceId) {
        this.combinedAudienceId = combinedAudienceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CombinedAudience withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CombinedAudience withName(String name) {
        this.name = name;
        return this;
    }
}