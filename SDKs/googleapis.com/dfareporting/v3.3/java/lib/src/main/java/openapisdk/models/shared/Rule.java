package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rule
 * A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
**/
public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetId")
    public String assetId;
    public Rule withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Rule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingTemplateId")
    public String targetingTemplateId;
    public Rule withTargetingTemplateId(String targetingTemplateId) {
        this.targetingTemplateId = targetingTemplateId;
        return this;
    }
}