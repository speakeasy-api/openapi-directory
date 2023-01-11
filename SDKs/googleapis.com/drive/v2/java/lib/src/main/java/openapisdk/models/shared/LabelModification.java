package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelModification
 * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
**/
public class LabelModification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldModifications")
    public LabelFieldModification[] fieldModifications;
    public LabelModification withFieldModifications(LabelFieldModification[] fieldModifications) {
        this.fieldModifications = fieldModifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LabelModification withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelId")
    public String labelId;
    public LabelModification withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeLabel")
    public Boolean removeLabel;
    public LabelModification withRemoveLabel(Boolean removeLabel) {
        this.removeLabel = removeLabel;
        return this;
    }
}