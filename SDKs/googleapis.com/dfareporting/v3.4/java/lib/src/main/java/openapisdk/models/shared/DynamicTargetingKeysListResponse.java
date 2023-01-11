package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicTargetingKeysListResponse
 * Dynamic Targeting Key List Response
**/
public class DynamicTargetingKeysListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicTargetingKeys")
    public DynamicTargetingKey[] dynamicTargetingKeys;
    public DynamicTargetingKeysListResponse withDynamicTargetingKeys(DynamicTargetingKey[] dynamicTargetingKeys) {
        this.dynamicTargetingKeys = dynamicTargetingKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DynamicTargetingKeysListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}