package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Float error;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withError(Float error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noReport")
    public Float noReport;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withNoReport(Float noReport) {
        this.noReport = noReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successAlreadyOK")
    public Float successAlreadyOK;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withSuccessAlreadyOk(Float successAlreadyOK) {
        this.successAlreadyOK = successAlreadyOK;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successNotApplicable")
    public Float successNotApplicable;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withSuccessNotApplicable(Float successNotApplicable) {
        this.successNotApplicable = successNotApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRepaired")
    public Float successRepaired;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withSuccessRepaired(Float successRepaired) {
        this.successRepaired = successRepaired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedMissingComponent")
    public Float unexpectedMissingComponent;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withUnexpectedMissingComponent(Float unexpectedMissingComponent) {
        this.unexpectedMissingComponent = unexpectedMissingComponent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedUnknownComponent")
    public Float unexpectedUnknownComponent;
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails withUnexpectedUnknownComponent(Float unexpectedUnknownComponent) {
        this.unexpectedUnknownComponent = unexpectedUnknownComponent;
        return this;
    }
}