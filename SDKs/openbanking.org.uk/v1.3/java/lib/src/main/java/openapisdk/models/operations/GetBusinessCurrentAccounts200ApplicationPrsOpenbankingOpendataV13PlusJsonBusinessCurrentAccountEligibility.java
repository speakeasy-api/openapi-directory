package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility
 * Eligibility
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility {
    @JsonProperty("AgeRestricted")
    public Boolean ageRestricted;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withAgeRestricted(Boolean ageRestricted) {
        this.ageRestricted = ageRestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualBusinessTurnover")
    public String annualBusinessTurnover;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withAnnualBusinessTurnover(String annualBusinessTurnover) {
        this.annualBusinessTurnover = annualBusinessTurnover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualBusinessTurnoverCurrency")
    public String annualBusinessTurnoverCurrency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withAnnualBusinessTurnoverCurrency(String annualBusinessTurnoverCurrency) {
        this.annualBusinessTurnoverCurrency = annualBusinessTurnoverCurrency;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibilityName")
    public String eligibilityName;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withEligibilityName(String eligibilityName) {
        this.eligibilityName = eligibilityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibilityNotes")
    public String eligibilityNotes;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withEligibilityNotes(String eligibilityNotes) {
        this.eligibilityNotes = eligibilityNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibilityType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum eligibilityType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withEligibilityType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum eligibilityType) {
        this.eligibilityType = eligibilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncomeCondition")
    public String incomeCondition;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withIncomeCondition(String incomeCondition) {
        this.incomeCondition = incomeCondition;
        return this;
    }
    @JsonProperty("IncomeTurnoverRelated")
    public Boolean incomeTurnoverRelated;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withIncomeTurnoverRelated(Boolean incomeTurnoverRelated) {
        this.incomeTurnoverRelated = incomeTurnoverRelated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MarketingEligibility")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum[] marketingEligibility;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMarketingEligibility(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum[] marketingEligibility) {
        this.marketingEligibility = marketingEligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxNumberOfAccounts")
    public String maxNumberOfAccounts;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMaxNumberOfAccounts(String maxNumberOfAccounts) {
        this.maxNumberOfAccounts = maxNumberOfAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumAge")
    public Long maximumAge;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMaximumAge(Long maximumAge) {
        this.maximumAge = maximumAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumAgeToOpen")
    public Long maximumAgeToOpen;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMaximumAgeToOpen(Long maximumAgeToOpen) {
        this.maximumAgeToOpen = maximumAgeToOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumOpeningAmount")
    public Boolean maximumOpeningAmount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMaximumOpeningAmount(Boolean maximumOpeningAmount) {
        this.maximumOpeningAmount = maximumOpeningAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinIncomeTurnoverPaidIntoAccount")
    public Long minIncomeTurnoverPaidIntoAccount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinIncomeTurnoverPaidIntoAccount(Long minIncomeTurnoverPaidIntoAccount) {
        this.minIncomeTurnoverPaidIntoAccount = minIncomeTurnoverPaidIntoAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumAge")
    public Long minimumAge;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumAge(Long minimumAge) {
        this.minimumAge = minimumAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumDeposit")
    public Boolean minimumDeposit;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumDeposit(Boolean minimumDeposit) {
        this.minimumDeposit = minimumDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumIncomeFrequency")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum minimumIncomeFrequency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumIncomeFrequency(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum minimumIncomeFrequency) {
        this.minimumIncomeFrequency = minimumIncomeFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumIncomeTurnoverAmount")
    public String minimumIncomeTurnoverAmount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumIncomeTurnoverAmount(String minimumIncomeTurnoverAmount) {
        this.minimumIncomeTurnoverAmount = minimumIncomeTurnoverAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumIncomeTurnoverCurrency")
    public String minimumIncomeTurnoverCurrency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumIncomeTurnoverCurrency(String minimumIncomeTurnoverCurrency) {
        this.minimumIncomeTurnoverCurrency = minimumIncomeTurnoverCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumOperatingBalance")
    public String minimumOperatingBalance;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumOperatingBalance(String minimumOperatingBalance) {
        this.minimumOperatingBalance = minimumOperatingBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumOperatingBalanceCurrency")
    public String minimumOperatingBalanceCurrency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumOperatingBalanceCurrency(String minimumOperatingBalanceCurrency) {
        this.minimumOperatingBalanceCurrency = minimumOperatingBalanceCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumOperatingBalanceExists")
    public Boolean minimumOperatingBalanceExists;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withMinimumOperatingBalanceExists(Boolean minimumOperatingBalanceExists) {
        this.minimumOperatingBalanceExists = minimumOperatingBalanceExists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMaximumAmount")
    public String openingDepositMaximumAmount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withOpeningDepositMaximumAmount(String openingDepositMaximumAmount) {
        this.openingDepositMaximumAmount = openingDepositMaximumAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMaximumCurrency")
    public String openingDepositMaximumCurrency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withOpeningDepositMaximumCurrency(String openingDepositMaximumCurrency) {
        this.openingDepositMaximumCurrency = openingDepositMaximumCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMinimum")
    public String openingDepositMinimum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withOpeningDepositMinimum(String openingDepositMinimum) {
        this.openingDepositMinimum = openingDepositMinimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpeningDepositMinimumCurrency")
    public String openingDepositMinimumCurrency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withOpeningDepositMinimumCurrency(String openingDepositMinimumCurrency) {
        this.openingDepositMinimumCurrency = openingDepositMinimumCurrency;
        return this;
    }
    @JsonProperty("OtherFinancialHoldingRequired")
    public Boolean otherFinancialHoldingRequired;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withOtherFinancialHoldingRequired(Boolean otherFinancialHoldingRequired) {
        this.otherFinancialHoldingRequired = otherFinancialHoldingRequired;
        return this;
    }
    @JsonProperty("PreviousBankruptcy")
    public Boolean previousBankruptcy;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withPreviousBankruptcy(Boolean previousBankruptcy) {
        this.previousBankruptcy = previousBankruptcy;
        return this;
    }
    @JsonProperty("ResidencyRestricted")
    public Boolean residencyRestricted;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withResidencyRestricted(Boolean residencyRestricted) {
        this.residencyRestricted = residencyRestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResidencyRestrictedRegion")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum residencyRestrictedRegion;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withResidencyRestrictedRegion(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum residencyRestrictedRegion) {
        this.residencyRestrictedRegion = residencyRestrictedRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SingleJointIncome")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum singleJointIncome;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withSingleJointIncome(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum singleJointIncome) {
        this.singleJointIncome = singleJointIncome;
        return this;
    }
    @JsonProperty("ThirdSectorOrganisations")
    public Boolean thirdSectorOrganisations;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility withThirdSectorOrganisations(Boolean thirdSectorOrganisations) {
        this.thirdSectorOrganisations = thirdSectorOrganisations;
        return this;
    }
}