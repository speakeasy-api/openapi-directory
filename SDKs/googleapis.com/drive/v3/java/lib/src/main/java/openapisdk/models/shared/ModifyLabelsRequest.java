package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyLabelsRequest
 * A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
**/
public class ModifyLabelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ModifyLabelsRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelModifications")
    public LabelModification[] labelModifications;
    public ModifyLabelsRequest withLabelModifications(LabelModification[] labelModifications) {
        this.labelModifications = labelModifications;
        return this;
    }
}