package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Feedback
 * Feedback for a respondent about their response to a question.
**/
public class Feedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("material")
    public ExtraMaterial[] material;
    public Feedback withMaterial(ExtraMaterial[] material) {
        this.material = material;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Feedback withText(String text) {
        this.text = text;
        return this;
    }
}