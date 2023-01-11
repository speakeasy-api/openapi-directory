package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayCodePayCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Benefit")
    public Boolean benefit;
    public PayCodePayCode withBenefit(Boolean benefit) {
        this.benefit = benefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public PayCodePayCode withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PayCodePayCode withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public PayCodePayCode withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetaData")
    public java.util.Map<String, Object> metaData;
    public PayCodePayCode withMetaData(java.util.Map<String, Object> metaData) {
        this.metaData = metaData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Niable")
    public Boolean niable;
    public PayCodePayCode withNiable(Boolean niable) {
        this.niable = niable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NominalCode")
    public PayCodePayCodeNominalCode nominalCode;
    public PayCodePayCode withNominalCode(PayCodePayCodeNominalCode nominalCode) {
        this.nominalCode = nominalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonArrestable")
    public Boolean nonArrestable;
    public PayCodePayCode withNonArrestable(Boolean nonArrestable) {
        this.nonArrestable = nonArrestable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notional")
    public Boolean notional;
    public PayCodePayCode withNotional(Boolean notional) {
        this.notional = notional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Readonly")
    public Boolean readonly;
    public PayCodePayCode withReadonly(Boolean readonly) {
        this.readonly = readonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public PayCodePayCodeRegionEnum region;
    public PayCodePayCode withRegion(PayCodePayCodeRegionEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public Integer revision;
    public PayCodePayCode withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Taxable")
    public Boolean taxable;
    public PayCodePayCode withTaxable(Boolean taxable) {
        this.taxable = taxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Territory")
    public PayCodePayCodeTerritoryEnum territory;
    public PayCodePayCode withTerritory(PayCodePayCodeTerritoryEnum territory) {
        this.territory = territory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public PayCodePayCodeTypeEnum type;
    public PayCodePayCode withType(PayCodePayCodeTypeEnum type) {
        this.type = type;
        return this;
    }
}