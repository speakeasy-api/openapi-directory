package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppliedLabelChangeDetail
 * A change made to a Label on the Target.
**/
public class AppliedLabelChangeDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldChanges")
    public FieldValueChange[] fieldChanges;
    public AppliedLabelChangeDetail withFieldChanges(FieldValueChange[] fieldChanges) {
        this.fieldChanges = fieldChanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public AppliedLabelChangeDetail withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AppliedLabelChangeDetail withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public AppliedLabelChangeDetailTypesEnum[] types;
    public AppliedLabelChangeDetail withTypes(AppliedLabelChangeDetailTypesEnum[] types) {
        this.types = types;
        return this;
    }
}