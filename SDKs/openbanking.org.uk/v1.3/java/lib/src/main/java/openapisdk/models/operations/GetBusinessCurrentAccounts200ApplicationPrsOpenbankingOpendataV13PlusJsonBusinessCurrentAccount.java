package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount
 * Business current account
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount {
    @JsonProperty("AccessChannels")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum[] accessChannels;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withAccessChannels(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum[] accessChannels) {
        this.accessChannels = accessChannels;
        return this;
    }
    @JsonProperty("Benefits")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits benefits;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withBenefits(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonProperty("CAPricing")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing[] caPricing;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCaPricing(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing[] caPricing) {
        this.caPricing = caPricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CardNotes")
    public String cardNotes;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCardNotes(String cardNotes) {
        this.cardNotes = cardNotes;
        return this;
    }
    @JsonProperty("CardType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum[] cardType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCardType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum[] cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonProperty("CardWithdrawalLimit")
    public String cardWithdrawalLimit;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCardWithdrawalLimit(String cardWithdrawalLimit) {
        this.cardWithdrawalLimit = cardWithdrawalLimit;
        return this;
    }
    @JsonProperty("ChequeBookAvailable")
    public Boolean chequeBookAvailable;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withChequeBookAvailable(Boolean chequeBookAvailable) {
        this.chequeBookAvailable = chequeBookAvailable;
        return this;
    }
    @JsonProperty("Contactless")
    public Boolean contactless;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withContactless(Boolean contactless) {
        this.contactless = contactless;
        return this;
    }
    @JsonProperty("CreditInterest")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest creditInterest;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditInterest(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest creditInterest) {
        this.creditInterest = creditInterest;
        return this;
    }
    @JsonProperty("CreditScoringPartOfAccountOpeningForGettingAnAccount")
    public Boolean creditScoringPartOfAccountOpeningForGettingAnAccount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditScoringPartOfAccountOpeningForGettingAnAccount(Boolean creditScoringPartOfAccountOpeningForGettingAnAccount) {
        this.creditScoringPartOfAccountOpeningForGettingAnAccount = creditScoringPartOfAccountOpeningForGettingAnAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningForIDVerification")
    public Boolean creditScoringPartOfAccountOpeningForIDVerification;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditScoringPartOfAccountOpeningForIdVerification(Boolean creditScoringPartOfAccountOpeningForIDVerification) {
        this.creditScoringPartOfAccountOpeningForIDVerification = creditScoringPartOfAccountOpeningForIDVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore) {
        this.creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore = creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningIDVerificationText")
    public String[] creditScoringPartOfAccountOpeningIDVerificationText;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditScoringPartOfAccountOpeningIdVerificationText(String[] creditScoringPartOfAccountOpeningIDVerificationText) {
        this.creditScoringPartOfAccountOpeningIDVerificationText = creditScoringPartOfAccountOpeningIDVerificationText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore) {
        this.creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore = creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningText")
    public String creditScoringPartOfAccountOpeningText;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCreditScoringPartOfAccountOpeningText(String creditScoringPartOfAccountOpeningText) {
        this.creditScoringPartOfAccountOpeningText = creditScoringPartOfAccountOpeningText;
        return this;
    }
    @JsonProperty("Currency")
    public String[] currency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withCurrency(String[] currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("Eligibility")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility eligibility;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withEligibility(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility eligibility) {
        this.eligibility = eligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Feature")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature[] feature;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withFeature(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature[] feature) {
        this.feature = feature;
        return this;
    }
    @JsonProperty("FeesAndCharges")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges[] feesAndCharges;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withFeesAndCharges(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonProperty("InternationalPaymentsSupported")
    public Boolean internationalPaymentsSupported;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withInternationalPaymentsSupported(Boolean internationalPaymentsSupported) {
        this.internationalPaymentsSupported = internationalPaymentsSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumMonthlyCharge")
    public String maximumMonthlyCharge;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withMaximumMonthlyCharge(String maximumMonthlyCharge) {
        this.maximumMonthlyCharge = maximumMonthlyCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobileWallet")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum[] mobileWallet;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withMobileWallet(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum[] mobileWallet) {
        this.mobileWallet = mobileWallet;
        return this;
    }
    @JsonProperty("Organisation")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation organisation;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withOrganisation(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation organisation) {
        this.organisation = organisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Overdraft")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft[] overdraft;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withOverdraft(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft[] overdraft) {
        this.overdraft = overdraft;
        return this;
    }
    @JsonProperty("OverdraftOffered")
    public Boolean overdraftOffered;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withOverdraftOffered(Boolean overdraftOffered) {
        this.overdraftOffered = overdraftOffered;
        return this;
    }
    @JsonProperty("ProductDescription")
    public String productDescription;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @JsonProperty("ProductIdentifier")
    public String productIdentifier;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withProductIdentifier(String productIdentifier) {
        this.productIdentifier = productIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductName")
    public String productName;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonProperty("ProductSegment")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum[] productSegment;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withProductSegment(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum[] productSegment) {
        this.productSegment = productSegment;
        return this;
    }
    @JsonProperty("ProductType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum productType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withProductType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonProperty("ProductURL")
    public String[] productURL;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withProductUrl(String[] productURL) {
        this.productURL = productURL;
        return this;
    }
    @JsonProperty("TsandCs")
    public String[] tsandCs;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount withTsandCs(String[] tsandCs) {
        this.tsandCs = tsandCs;
        return this;
    }
}