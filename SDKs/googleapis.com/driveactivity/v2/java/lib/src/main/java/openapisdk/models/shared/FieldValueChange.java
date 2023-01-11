package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldValueChange
 * Change to a Field value.
**/
public class FieldValueChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FieldValueChange withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldId")
    public String fieldId;
    public FieldValueChange withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newValue")
    public FieldValue newValue;
    public FieldValueChange withNewValue(FieldValue newValue) {
        this.newValue = newValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldValue")
    public FieldValue oldValue;
    public FieldValueChange withOldValue(FieldValue oldValue) {
        this.oldValue = oldValue;
        return this;
    }
}