package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldProperties
 * The basic properties of the field.
**/
public class GoogleAppsDriveLabelsV2betaFieldProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAppsDriveLabelsV2betaFieldProperties withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertBeforeField")
    public String insertBeforeField;
    public GoogleAppsDriveLabelsV2betaFieldProperties withInsertBeforeField(String insertBeforeField) {
        this.insertBeforeField = insertBeforeField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public GoogleAppsDriveLabelsV2betaFieldProperties withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}