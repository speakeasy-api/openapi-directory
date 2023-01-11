package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployerEmployer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public EmployerEmployerAddress address;
    public EmployerEmployer withAddress(EmployerEmployerAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApprenticeshipLevyAllowance")
    public Double apprenticeshipLevyAllowance;
    public EmployerEmployer withApprenticeshipLevyAllowance(Double apprenticeshipLevyAllowance) {
        this.apprenticeshipLevyAllowance = apprenticeshipLevyAllowance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoEnrolment")
    public EmployerEmployerAutoEnrolment autoEnrolment;
    public EmployerEmployer withAutoEnrolment(EmployerEmployerAutoEnrolment autoEnrolment) {
        this.autoEnrolment = autoEnrolment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BacsServiceUserNumber")
    public String bacsServiceUserNumber;
    public EmployerEmployer withBacsServiceUserNumber(String bacsServiceUserNumber) {
        this.bacsServiceUserNumber = bacsServiceUserNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankAccount")
    public EmployerEmployerBankAccount bankAccount;
    public EmployerEmployer withBankAccount(EmployerEmployerBankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculateApprenticeshipLevy")
    public Boolean calculateApprenticeshipLevy;
    public EmployerEmployer withCalculateApprenticeshipLevy(Boolean calculateApprenticeshipLevy) {
        this.calculateApprenticeshipLevy = calculateApprenticeshipLevy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClaimEmploymentAllowance")
    public Boolean claimEmploymentAllowance;
    public EmployerEmployer withClaimEmploymentAllowance(Boolean claimEmploymentAllowance) {
        this.claimEmploymentAllowance = claimEmploymentAllowance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClaimSmallEmployerRelief")
    public Boolean claimSmallEmployerRelief;
    public EmployerEmployer withClaimSmallEmployerRelief(Boolean claimSmallEmployerRelief) {
        this.claimSmallEmployerRelief = claimSmallEmployerRelief;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public EmployerEmployer withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HmrcSettings")
    public EmployerEmployerHmrcSettings hmrcSettings;
    public EmployerEmployer withHmrcSettings(EmployerEmployerHmrcSettings hmrcSettings) {
        this.hmrcSettings = hmrcSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetaData")
    public java.util.Map<String, Object> metaData;
    public EmployerEmployer withMetaData(java.util.Map<String, Object> metaData) {
        this.metaData = metaData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public EmployerEmployer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public EmployerEmployerRegionEnum region;
    public EmployerEmployer withRegion(EmployerEmployerRegionEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public Integer revision;
    public EmployerEmployer withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleExclusions")
    public EmployerEmployerRuleExclusionsEnum ruleExclusions;
    public EmployerEmployer withRuleExclusions(EmployerEmployerRuleExclusionsEnum ruleExclusions) {
        this.ruleExclusions = ruleExclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Territory")
    public EmployerEmployerTerritoryEnum territory;
    public EmployerEmployer withTerritory(EmployerEmployerTerritoryEnum territory) {
        this.territory = territory;
        return this;
    }
}