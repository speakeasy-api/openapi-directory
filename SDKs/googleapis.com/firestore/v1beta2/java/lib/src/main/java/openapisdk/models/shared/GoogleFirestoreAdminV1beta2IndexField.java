package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2IndexField
 * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
**/
public class GoogleFirestoreAdminV1beta2IndexField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arrayConfig")
    public GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum arrayConfig;
    public GoogleFirestoreAdminV1beta2IndexField withArrayConfig(GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum arrayConfig) {
        this.arrayConfig = arrayConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldPath")
    public String fieldPath;
    public GoogleFirestoreAdminV1beta2IndexField withFieldPath(String fieldPath) {
        this.fieldPath = fieldPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public GoogleFirestoreAdminV1beta2IndexFieldOrderEnum order;
    public GoogleFirestoreAdminV1beta2IndexField withOrder(GoogleFirestoreAdminV1beta2IndexFieldOrderEnum order) {
        this.order = order;
        return this;
    }
}