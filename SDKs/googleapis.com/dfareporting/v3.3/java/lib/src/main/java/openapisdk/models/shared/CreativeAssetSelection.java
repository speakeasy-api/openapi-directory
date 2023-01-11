package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeAssetSelection
 * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
**/
public class CreativeAssetSelection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAssetId")
    public String defaultAssetId;
    public CreativeAssetSelection withDefaultAssetId(String defaultAssetId) {
        this.defaultAssetId = defaultAssetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public Rule[] rules;
    public CreativeAssetSelection withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}