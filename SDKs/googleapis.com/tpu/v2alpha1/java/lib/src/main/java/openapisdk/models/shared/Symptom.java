package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Symptom
 * A Symptom instance.
**/
public class Symptom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Symptom withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public Symptom withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symptomType")
    public SymptomSymptomTypeEnum symptomType;
    public Symptom withSymptomType(SymptomSymptomTypeEnum symptomType) {
        this.symptomType = symptomType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerId")
    public String workerId;
    public Symptom withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}