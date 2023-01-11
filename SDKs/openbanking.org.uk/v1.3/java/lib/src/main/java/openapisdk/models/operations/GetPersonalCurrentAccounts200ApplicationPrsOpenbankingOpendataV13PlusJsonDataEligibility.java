package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
 * Eligibility
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility {
    @JsonProperty("AgeRestricted")
    public Boolean ageRestricted;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withAgeRestricted(Boolean ageRestricted) {
        this.ageRestricted = ageRestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualBusinessTurnover")
    public String annualBusinessTurnover;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withAnnualBusinessTurnover(String annualBusinessTurnover) {
        this.annualBusinessTurnover = annualBusinessTurnover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualBusinessTurnoverCurrency")
    public String annualBusinessTurnoverCurrency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withAnnualBusinessTurnoverCurrency(String annualBusinessTurnoverCurrency) {
        this.annualBusinessTurnoverCurrency = annualBusinessTurnoverCurrency;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibilityName")
    public String eligibilityName;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withEligibilityName(String eligibilityName) {
        this.eligibilityName = eligibilityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibilityNotes")
    public String eligibilityNotes;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withEligibilityNotes(String eligibilityNotes) {
        this.eligibilityNotes = eligibilityNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibilityType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum eligibilityType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withEligibilityType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum eligibilityType) {
        this.eligibilityType = eligibilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncomeCondition")
    public String incomeCondition;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withIncomeCondition(String incomeCondition) {
        this.incomeCondition = incomeCondition;
        return this;
    }
    @JsonProperty("IncomeTurnoverRelated")
    public Boolean incomeTurnoverRelated;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withIncomeTurnoverRelated(Boolean incomeTurnoverRelated) {
        this.incomeTurnoverRelated = incomeTurnoverRelated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MarketingEligibility")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[] marketingEligibility;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMarketingEligibility(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[] marketingEligibility) {
        this.marketingEligibility = marketingEligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxNumberOfAccounts")
    public String maxNumberOfAccounts;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMaxNumberOfAccounts(String maxNumberOfAccounts) {
        this.maxNumberOfAccounts = maxNumberOfAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumAge")
    public Long maximumAge;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMaximumAge(Long maximumAge) {
        this.maximumAge = maximumAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumAgeToOpen")
    public Long maximumAgeToOpen;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMaximumAgeToOpen(Long maximumAgeToOpen) {
        this.maximumAgeToOpen = maximumAgeToOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumOpeningAmount")
    public Boolean maximumOpeningAmount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMaximumOpeningAmount(Boolean maximumOpeningAmount) {
        this.maximumOpeningAmount = maximumOpeningAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinIncomeTurnoverPaidIntoAccount")
    public Long minIncomeTurnoverPaidIntoAccount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinIncomeTurnoverPaidIntoAccount(Long minIncomeTurnoverPaidIntoAccount) {
        this.minIncomeTurnoverPaidIntoAccount = minIncomeTurnoverPaidIntoAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumAge")
    public Long minimumAge;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumAge(Long minimumAge) {
        this.minimumAge = minimumAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumDeposit")
    public Boolean minimumDeposit;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumDeposit(Boolean minimumDeposit) {
        this.minimumDeposit = minimumDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumIncomeFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum minimumIncomeFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumIncomeFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum minimumIncomeFrequency) {
        this.minimumIncomeFrequency = minimumIncomeFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumIncomeTurnoverAmount")
    public String minimumIncomeTurnoverAmount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumIncomeTurnoverAmount(String minimumIncomeTurnoverAmount) {
        this.minimumIncomeTurnoverAmount = minimumIncomeTurnoverAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumIncomeTurnoverCurrency")
    public String minimumIncomeTurnoverCurrency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumIncomeTurnoverCurrency(String minimumIncomeTurnoverCurrency) {
        this.minimumIncomeTurnoverCurrency = minimumIncomeTurnoverCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumOperatingBalance")
    public String minimumOperatingBalance;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumOperatingBalance(String minimumOperatingBalance) {
        this.minimumOperatingBalance = minimumOperatingBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumOperatingBalanceCurrency")
    public String minimumOperatingBalanceCurrency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumOperatingBalanceCurrency(String minimumOperatingBalanceCurrency) {
        this.minimumOperatingBalanceCurrency = minimumOperatingBalanceCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumOperatingBalanceExists")
    public Boolean minimumOperatingBalanceExists;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withMinimumOperatingBalanceExists(Boolean minimumOperatingBalanceExists) {
        this.minimumOperatingBalanceExists = minimumOperatingBalanceExists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMaximumAmount")
    public String openingDepositMaximumAmount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withOpeningDepositMaximumAmount(String openingDepositMaximumAmount) {
        this.openingDepositMaximumAmount = openingDepositMaximumAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMaximumCurrency")
    public String openingDepositMaximumCurrency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withOpeningDepositMaximumCurrency(String openingDepositMaximumCurrency) {
        this.openingDepositMaximumCurrency = openingDepositMaximumCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMinimum")
    public String openingDepositMinimum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withOpeningDepositMinimum(String openingDepositMinimum) {
        this.openingDepositMinimum = openingDepositMinimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMinimumCurrency")
    public String openingDepositMinimumCurrency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withOpeningDepositMinimumCurrency(String openingDepositMinimumCurrency) {
        this.openingDepositMinimumCurrency = openingDepositMinimumCurrency;
        return this;
    }
    @JsonProperty("OtherFinancialHoldingRequired")
    public Boolean otherFinancialHoldingRequired;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withOtherFinancialHoldingRequired(Boolean otherFinancialHoldingRequired) {
        this.otherFinancialHoldingRequired = otherFinancialHoldingRequired;
        return this;
    }
    @JsonProperty("PreviousBankruptcy")
    public Boolean previousBankruptcy;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withPreviousBankruptcy(Boolean previousBankruptcy) {
        this.previousBankruptcy = previousBankruptcy;
        return this;
    }
    @JsonProperty("ResidencyRestricted")
    public Boolean residencyRestricted;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withResidencyRestricted(Boolean residencyRestricted) {
        this.residencyRestricted = residencyRestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResidencyRestrictedRegion")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum residencyRestrictedRegion;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withResidencyRestrictedRegion(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum residencyRestrictedRegion) {
        this.residencyRestrictedRegion = residencyRestrictedRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SingleJointIncome")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum singleJointIncome;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withSingleJointIncome(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum singleJointIncome) {
        this.singleJointIncome = singleJointIncome;
        return this;
    }
    @JsonProperty("ThirdSectorOrganisations")
    public Boolean thirdSectorOrganisations;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility withThirdSectorOrganisations(Boolean thirdSectorOrganisations) {
        this.thirdSectorOrganisations = thirdSectorOrganisations;
        return this;
    }
}