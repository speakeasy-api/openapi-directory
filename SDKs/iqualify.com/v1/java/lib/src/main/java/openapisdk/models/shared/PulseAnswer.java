package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PulseAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiChoiceAnswer")
    public PulseMcqOption[] multiChoiceAnswer;
    public PulseAnswer withMultiChoiceAnswer(PulseMcqOption[] multiChoiceAnswer) {
        this.multiChoiceAnswer = multiChoiceAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spatialAnswer")
    public PulseSpatialOption[] spatialAnswer;
    public PulseAnswer withSpatialAnswer(PulseSpatialOption[] spatialAnswer) {
        this.spatialAnswer = spatialAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textAnswer")
    public String textAnswer;
    public PulseAnswer withTextAnswer(String textAnswer) {
        this.textAnswer = textAnswer;
        return this;
    }
}