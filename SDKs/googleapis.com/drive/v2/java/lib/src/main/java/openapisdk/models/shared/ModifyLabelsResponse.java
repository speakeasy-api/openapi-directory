package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyLabelsResponse
 * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
**/
public class ModifyLabelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ModifyLabelsResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedLabels")
    public Label[] modifiedLabels;
    public ModifyLabelsResponse withModifiedLabels(Label[] modifiedLabels) {
        this.modifiedLabels = modifiedLabels;
        return this;
    }
}