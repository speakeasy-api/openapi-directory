package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceWebDetails
 * The Web details resource.
**/
public class InstanceWebDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InstanceWebDetails withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchUrl")
    public String launchUrl;
    public InstanceWebDetails withLaunchUrl(String launchUrl) {
        this.launchUrl = launchUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred")
    public Boolean preferred;
    public InstanceWebDetails withPreferred(Boolean preferred) {
        this.preferred = preferred;
        return this;
    }
}