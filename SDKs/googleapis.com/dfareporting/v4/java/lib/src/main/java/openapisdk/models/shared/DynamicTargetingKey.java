package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicTargetingKey
 * Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
**/
public class DynamicTargetingKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DynamicTargetingKey withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DynamicTargetingKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public String objectId;
    public DynamicTargetingKey withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public DynamicTargetingKeyObjectTypeEnum objectType;
    public DynamicTargetingKey withObjectType(DynamicTargetingKeyObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}