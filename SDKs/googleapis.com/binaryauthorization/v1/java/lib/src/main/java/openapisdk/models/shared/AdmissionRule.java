package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdmissionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementMode")
    public AdmissionRuleEnforcementModeEnum enforcementMode;
    public AdmissionRule withEnforcementMode(AdmissionRuleEnforcementModeEnum enforcementMode) {
        this.enforcementMode = enforcementMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMode")
    public AdmissionRuleEvaluationModeEnum evaluationMode;
    public AdmissionRule withEvaluationMode(AdmissionRuleEvaluationModeEnum evaluationMode) {
        this.evaluationMode = evaluationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireAttestationsBy")
    public String[] requireAttestationsBy;
    public AdmissionRule withRequireAttestationsBy(String[] requireAttestationsBy) {
        this.requireAttestationsBy = requireAttestationsBy;
        return this;
    }
}