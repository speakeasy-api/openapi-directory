package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EffectiveTag
 * An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
**/
public class EffectiveTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inherited")
    public Boolean inherited;
    public EffectiveTag withInherited(Boolean inherited) {
        this.inherited = inherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespacedTagKey")
    public String namespacedTagKey;
    public EffectiveTag withNamespacedTagKey(String namespacedTagKey) {
        this.namespacedTagKey = namespacedTagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespacedTagValue")
    public String namespacedTagValue;
    public EffectiveTag withNamespacedTagValue(String namespacedTagValue) {
        this.namespacedTagValue = namespacedTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagKey")
    public String tagKey;
    public EffectiveTag withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValue")
    public String tagValue;
    public EffectiveTag withTagValue(String tagValue) {
        this.tagValue = tagValue;
        return this;
    }
}