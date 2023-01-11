package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CisLineCisLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisDeduction")
    public Double cisDeduction;
    public CisLineCisLine withCisDeduction(Double cisDeduction) {
        this.cisDeduction = cisDeduction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisLineType")
    public String cisLineType;
    public CisLineCisLine withCisLineType(String cisLineType) {
        this.cisLineType = cisLineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CisLineCisLine withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Generated")
    public OffsetDateTime generated;
    public CisLineCisLine withGenerated(OffsetDateTime generated) {
        this.generated = generated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrossPay")
    public Double grossPay;
    public CisLineCisLine withGrossPay(Double grossPay) {
        this.grossPay = grossPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NominalCodeKey")
    public String nominalCodeKey;
    public CisLineCisLine withNominalCodeKey(String nominalCodeKey) {
        this.nominalCodeKey = nominalCodeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayFrequency")
    public CisLineCisLinePayFrequencyEnum payFrequency;
    public CisLineCisLine withPayFrequency(CisLineCisLinePayFrequencyEnum payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxMonth")
    public Integer taxMonth;
    public CisLineCisLine withTaxMonth(Integer taxMonth) {
        this.taxMonth = taxMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxPeriod")
    public Integer taxPeriod;
    public CisLineCisLine withTaxPeriod(Integer taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxTreatment")
    public CisLineCisLineTaxTreatmentEnum taxTreatment;
    public CisLineCisLine withTaxTreatment(CisLineCisLineTaxTreatmentEnum taxTreatment) {
        this.taxTreatment = taxTreatment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public CisLineCisLine withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public CisLineCisLineUomEnum uom;
    public CisLineCisLine withUom(CisLineCisLineUomEnum uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnitRate")
    public Double unitRate;
    public CisLineCisLine withUnitRate(Double unitRate) {
        this.unitRate = unitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Units")
    public Double units;
    public CisLineCisLine withUnits(Double units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VAT")
    public Double vat;
    public CisLineCisLine withVat(Double vat) {
        this.vat = vat;
        return this;
    }
}