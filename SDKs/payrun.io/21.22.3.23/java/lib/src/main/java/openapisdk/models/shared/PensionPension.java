package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PensionPension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AECompatible")
    public Boolean aeCompatible;
    public PensionPension withAeCompatible(Boolean aeCompatible) {
        this.aeCompatible = aeCompatible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public PensionPension withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContributionDeductionDay")
    public Integer contributionDeductionDay;
    public PensionPension withContributionDeductionDay(Integer contributionDeductionDay) {
        this.contributionDeductionDay = contributionDeductionDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public PensionPension withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeContributionCash")
    public Double employeeContributionCash;
    public PensionPension withEmployeeContributionCash(Double employeeContributionCash) {
        this.employeeContributionCash = employeeContributionCash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeContributionPercent")
    public Double employeeContributionPercent;
    public PensionPension withEmployeeContributionPercent(Double employeeContributionPercent) {
        this.employeeContributionPercent = employeeContributionPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerContributionCash")
    public Double employerContributionCash;
    public PensionPension withEmployerContributionCash(Double employerContributionCash) {
        this.employerContributionCash = employerContributionCash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerContributionPercent")
    public Double employerContributionPercent;
    public PensionPension withEmployerContributionPercent(Double employerContributionPercent) {
        this.employerContributionPercent = employerContributionPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerNiSaving")
    public Boolean employerNiSaving;
    public PensionPension withEmployerNiSaving(Boolean employerNiSaving) {
        this.employerNiSaving = employerNiSaving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerNiSavingPercentage")
    public Double employerNiSavingPercentage;
    public PensionPension withEmployerNiSavingPercentage(Double employerNiSavingPercentage) {
        this.employerNiSavingPercentage = employerNiSavingPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public String group;
    public PensionPension withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LowerThreshold")
    public Double lowerThreshold;
    public PensionPension withLowerThreshold(Double lowerThreshold) {
        this.lowerThreshold = lowerThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetaData")
    public java.util.Map<String, Object> metaData;
    public PensionPension withMetaData(java.util.Map<String, Object> metaData) {
        this.metaData = metaData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PensionablePayCodes")
    public PensionPensionPensionablePayCodes pensionablePayCodes;
    public PensionPension withPensionablePayCodes(PensionPensionPensionablePayCodes pensionablePayCodes) {
        this.pensionablePayCodes = pensionablePayCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProRataMethod")
    public PensionPensionProRataMethodEnum proRataMethod;
    public PensionPension withProRataMethod(PensionPensionProRataMethodEnum proRataMethod) {
        this.proRataMethod = proRataMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderEmployerRef")
    public String providerEmployerRef;
    public PensionPension withProviderEmployerRef(String providerEmployerRef) {
        this.providerEmployerRef = providerEmployerRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderName")
    public String providerName;
    public PensionPension withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualifyingPayCodes")
    public PensionPensionQualifyingPayCodes qualifyingPayCodes;
    public PensionPension withQualifyingPayCodes(PensionPensionQualifyingPayCodes qualifyingPayCodes) {
        this.qualifyingPayCodes = qualifyingPayCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RasRoundingOverride")
    public PensionPensionRasRoundingOverrideEnum rasRoundingOverride;
    public PensionPension withRasRoundingOverride(PensionPensionRasRoundingOverrideEnum rasRoundingOverride) {
        this.rasRoundingOverride = rasRoundingOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public Integer revision;
    public PensionPension withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoundingOption")
    public PensionPensionRoundingOptionEnum roundingOption;
    public PensionPension withRoundingOption(PensionPensionRoundingOptionEnum roundingOption) {
        this.roundingOption = roundingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SalarySacrifice")
    public Boolean salarySacrifice;
    public PensionPension withSalarySacrifice(Boolean salarySacrifice) {
        this.salarySacrifice = salarySacrifice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public PensionPension withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubGroup")
    public String subGroup;
    public PensionPension withSubGroup(String subGroup) {
        this.subGroup = subGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxationMethod")
    public PensionPensionTaxationMethodEnum taxationMethod;
    public PensionPension withTaxationMethod(PensionPensionTaxationMethodEnum taxationMethod) {
        this.taxationMethod = taxationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpperThreshold")
    public Double upperThreshold;
    public PensionPension withUpperThreshold(Double upperThreshold) {
        this.upperThreshold = upperThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseAEThresholds")
    public Boolean useAEThresholds;
    public PensionPension withUseAeThresholds(Boolean useAEThresholds) {
        this.useAEThresholds = useAEThresholds;
        return this;
    }
}