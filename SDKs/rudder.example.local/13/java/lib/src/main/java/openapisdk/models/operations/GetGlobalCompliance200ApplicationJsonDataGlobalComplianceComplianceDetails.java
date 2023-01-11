package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Float error;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withError(Float error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noReport")
    public Float noReport;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withNoReport(Float noReport) {
        this.noReport = noReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successAlreadyOK")
    public Float successAlreadyOK;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withSuccessAlreadyOk(Float successAlreadyOK) {
        this.successAlreadyOK = successAlreadyOK;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successNotApplicable")
    public Float successNotApplicable;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withSuccessNotApplicable(Float successNotApplicable) {
        this.successNotApplicable = successNotApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRepaired")
    public Float successRepaired;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withSuccessRepaired(Float successRepaired) {
        this.successRepaired = successRepaired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedMissingComponent")
    public Float unexpectedMissingComponent;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withUnexpectedMissingComponent(Float unexpectedMissingComponent) {
        this.unexpectedMissingComponent = unexpectedMissingComponent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedUnknownComponent")
    public Float unexpectedUnknownComponent;
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails withUnexpectedUnknownComponent(Float unexpectedUnknownComponent) {
        this.unexpectedUnknownComponent = unexpectedUnknownComponent;
        return this;
    }
}