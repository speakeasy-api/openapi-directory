package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldProperties
 * The basic properties of the field.
**/
public class GoogleAppsDriveLabelsV2FieldProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAppsDriveLabelsV2FieldProperties withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertBeforeField")
    public String insertBeforeField;
    public GoogleAppsDriveLabelsV2FieldProperties withInsertBeforeField(String insertBeforeField) {
        this.insertBeforeField = insertBeforeField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public GoogleAppsDriveLabelsV2FieldProperties withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}