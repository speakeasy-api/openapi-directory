package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Float error;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withError(Float error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noReport")
    public Float noReport;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withNoReport(Float noReport) {
        this.noReport = noReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successAlreadyOK")
    public Float successAlreadyOK;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withSuccessAlreadyOk(Float successAlreadyOK) {
        this.successAlreadyOK = successAlreadyOK;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successNotApplicable")
    public Float successNotApplicable;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withSuccessNotApplicable(Float successNotApplicable) {
        this.successNotApplicable = successNotApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRepaired")
    public Float successRepaired;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withSuccessRepaired(Float successRepaired) {
        this.successRepaired = successRepaired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedMissingComponent")
    public Float unexpectedMissingComponent;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withUnexpectedMissingComponent(Float unexpectedMissingComponent) {
        this.unexpectedMissingComponent = unexpectedMissingComponent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedUnknownComponent")
    public Float unexpectedUnknownComponent;
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails withUnexpectedUnknownComponent(Float unexpectedUnknownComponent) {
        this.unexpectedUnknownComponent = unexpectedUnknownComponent;
        return this;
    }
}