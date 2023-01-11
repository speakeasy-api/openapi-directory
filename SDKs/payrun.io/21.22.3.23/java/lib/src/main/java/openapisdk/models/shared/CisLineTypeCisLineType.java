package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisLineTypeCisLineType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CisLineTypeCisLineType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineType")
    public String lineType;
    public CisLineTypeCisLineType withLineType(String lineType) {
        this.lineType = lineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NominalCode")
    public CisLineTypeCisLineTypeNominalCode nominalCode;
    public CisLineTypeCisLineType withNominalCode(CisLineTypeCisLineTypeNominalCode nominalCode) {
        this.nominalCode = nominalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxTreatment")
    public CisLineTypeCisLineTypeTaxTreatmentEnum taxTreatment;
    public CisLineTypeCisLineType withTaxTreatment(CisLineTypeCisLineTypeTaxTreatmentEnum taxTreatment) {
        this.taxTreatment = taxTreatment;
        return this;
    }
}