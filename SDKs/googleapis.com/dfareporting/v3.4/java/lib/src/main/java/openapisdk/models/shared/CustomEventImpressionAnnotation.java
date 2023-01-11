package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventImpressionAnnotation
 * Annotate an impression.
**/
public class CustomEventImpressionAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventImpressionAnnotation withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathImpressionId")
    public String pathImpressionId;
    public CustomEventImpressionAnnotation withPathImpressionId(String pathImpressionId) {
        this.pathImpressionId = pathImpressionId;
        return this;
    }
}