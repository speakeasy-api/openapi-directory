package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisInstructionCisInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisLineTag")
    public String cisLineTag;
    public CisInstructionCisInstruction withCisLineTag(String cisLineTag) {
        this.cisLineTag = cisLineTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisLineType")
    public String cisLineType;
    public CisInstructionCisInstruction withCisLineType(String cisLineType) {
        this.cisLineType = cisLineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CisInstructionCisInstruction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayFrequency")
    public CisInstructionCisInstructionPayFrequencyEnum payFrequency;
    public CisInstructionCisInstruction withPayFrequency(CisInstructionCisInstructionPayFrequencyEnum payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodEnd")
    public Integer periodEnd;
    public CisInstructionCisInstruction withPeriodEnd(Integer periodEnd) {
        this.periodEnd = periodEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodStart")
    public Integer periodStart;
    public CisInstructionCisInstruction withPeriodStart(Integer periodStart) {
        this.periodStart = periodStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYearEnd")
    public Integer taxYearEnd;
    public CisInstructionCisInstruction withTaxYearEnd(Integer taxYearEnd) {
        this.taxYearEnd = taxYearEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYearStart")
    public Integer taxYearStart;
    public CisInstructionCisInstruction withTaxYearStart(Integer taxYearStart) {
        this.taxYearStart = taxYearStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public CisInstructionCisInstructionUomEnum uom;
    public CisInstructionCisInstruction withUom(CisInstructionCisInstructionUomEnum uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Units")
    public Double units;
    public CisInstructionCisInstruction withUnits(Double units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VAT")
    public Double vat;
    public CisInstructionCisInstruction withVat(Double vat) {
        this.vat = vat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public CisInstructionCisInstruction withValue(Double value) {
        this.value = value;
        return this;
    }
}