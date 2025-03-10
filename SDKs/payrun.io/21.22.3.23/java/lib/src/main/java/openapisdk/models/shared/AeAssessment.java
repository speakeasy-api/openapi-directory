package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AeAssessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AEAssessment")
    public AeAssessmentAeAssessment aeAssessment;
    public AeAssessment withAeAssessment(AeAssessmentAeAssessment aeAssessment) {
        this.aeAssessment = aeAssessment;
        return this;
    }
}