package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2IndexConfig
 * The index configuration for this field.
**/
public class GoogleFirestoreAdminV1beta2IndexConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ancestorField")
    public String ancestorField;
    public GoogleFirestoreAdminV1beta2IndexConfig withAncestorField(String ancestorField) {
        this.ancestorField = ancestorField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexes")
    public GoogleFirestoreAdminV1beta2Index[] indexes;
    public GoogleFirestoreAdminV1beta2IndexConfig withIndexes(GoogleFirestoreAdminV1beta2Index[] indexes) {
        this.indexes = indexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverting")
    public Boolean reverting;
    public GoogleFirestoreAdminV1beta2IndexConfig withReverting(Boolean reverting) {
        this.reverting = reverting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usesAncestorConfig")
    public Boolean usesAncestorConfig;
    public GoogleFirestoreAdminV1beta2IndexConfig withUsesAncestorConfig(Boolean usesAncestorConfig) {
        this.usesAncestorConfig = usesAncestorConfig;
        return this;
    }
}