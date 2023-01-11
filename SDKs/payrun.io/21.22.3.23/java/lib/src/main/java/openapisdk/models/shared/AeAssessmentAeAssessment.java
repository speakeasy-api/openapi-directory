package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AeAssessmentAeAssessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Age")
    public Integer age;
    public AeAssessmentAeAssessment withAge(Integer age) {
        this.age = age;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentCode")
    public AeAssessmentAeAssessmentAssessmentCodeEnum assessmentCode;
    public AeAssessmentAeAssessment withAssessmentCode(AeAssessmentAeAssessmentAssessmentCodeEnum assessmentCode) {
        this.assessmentCode = assessmentCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentDate")
    public LocalDate assessmentDate;
    public AeAssessmentAeAssessment withAssessmentDate(LocalDate assessmentDate) {
        this.assessmentDate = assessmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentEvent")
    public AeAssessmentAeAssessmentAssessmentEventEnum assessmentEvent;
    public AeAssessmentAeAssessment withAssessmentEvent(AeAssessmentAeAssessmentAssessmentEventEnum assessmentEvent) {
        this.assessmentEvent = assessmentEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentOverride")
    public AeAssessmentAeAssessmentAssessmentOverrideEnum assessmentOverride;
    public AeAssessmentAeAssessment withAssessmentOverride(AeAssessmentAeAssessmentAssessmentOverrideEnum assessmentOverride) {
        this.assessmentOverride = assessmentOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentResult")
    public AeAssessmentAeAssessmentAssessmentResultEnum assessmentResult;
    public AeAssessmentAeAssessment withAssessmentResult(AeAssessmentAeAssessmentAssessmentResultEnum assessmentResult) {
        this.assessmentResult = assessmentResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsMemberOfAlternativePensionScheme")
    public Boolean isMemberOfAlternativePensionScheme;
    public AeAssessmentAeAssessment withIsMemberOfAlternativePensionScheme(Boolean isMemberOfAlternativePensionScheme) {
        this.isMemberOfAlternativePensionScheme = isMemberOfAlternativePensionScheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptOutWindowEndDate")
    public LocalDate optOutWindowEndDate;
    public AeAssessmentAeAssessment withOptOutWindowEndDate(LocalDate optOutWindowEndDate) {
        this.optOutWindowEndDate = optOutWindowEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualifyingEarnings")
    public Double qualifyingEarnings;
    public AeAssessmentAeAssessment withQualifyingEarnings(Double qualifyingEarnings) {
        this.qualifyingEarnings = qualifyingEarnings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReenrolmentDate")
    public LocalDate reenrolmentDate;
    public AeAssessmentAeAssessment withReenrolmentDate(LocalDate reenrolmentDate) {
        this.reenrolmentDate = reenrolmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatePensionAge")
    public Integer statePensionAge;
    public AeAssessmentAeAssessment withStatePensionAge(Integer statePensionAge) {
        this.statePensionAge = statePensionAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatePensionDate")
    public LocalDate statePensionDate;
    public AeAssessmentAeAssessment withStatePensionDate(LocalDate statePensionDate) {
        this.statePensionDate = statePensionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxPeriod")
    public Integer taxPeriod;
    public AeAssessmentAeAssessment withTaxPeriod(Integer taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public AeAssessmentAeAssessment withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}