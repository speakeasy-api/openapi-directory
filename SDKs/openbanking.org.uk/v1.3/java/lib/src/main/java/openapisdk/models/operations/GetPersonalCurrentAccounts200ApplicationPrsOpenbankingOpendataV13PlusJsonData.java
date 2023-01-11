package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData
 * Personal Current Account
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData {
    @JsonProperty("AccessChannels")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum[] accessChannels;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withAccessChannels(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum[] accessChannels) {
        this.accessChannels = accessChannels;
        return this;
    }
    @JsonProperty("Benefits")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits benefits;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withBenefits(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonProperty("CAPricing")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing[] caPricing;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCaPricing(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing[] caPricing) {
        this.caPricing = caPricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CardNotes")
    public String cardNotes;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCardNotes(String cardNotes) {
        this.cardNotes = cardNotes;
        return this;
    }
    @JsonProperty("CardType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum[] cardType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCardType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum[] cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonProperty("CardWithdrawalLimit")
    public String cardWithdrawalLimit;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCardWithdrawalLimit(String cardWithdrawalLimit) {
        this.cardWithdrawalLimit = cardWithdrawalLimit;
        return this;
    }
    @JsonProperty("ChequeBookAvailable")
    public Boolean chequeBookAvailable;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withChequeBookAvailable(Boolean chequeBookAvailable) {
        this.chequeBookAvailable = chequeBookAvailable;
        return this;
    }
    @JsonProperty("Contactless")
    public Boolean contactless;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withContactless(Boolean contactless) {
        this.contactless = contactless;
        return this;
    }
    @JsonProperty("CreditInterest")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest creditInterest;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditInterest(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest creditInterest) {
        this.creditInterest = creditInterest;
        return this;
    }
    @JsonProperty("CreditScoringPartOfAccountOpeningForGettingAnAccount")
    public Boolean creditScoringPartOfAccountOpeningForGettingAnAccount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditScoringPartOfAccountOpeningForGettingAnAccount(Boolean creditScoringPartOfAccountOpeningForGettingAnAccount) {
        this.creditScoringPartOfAccountOpeningForGettingAnAccount = creditScoringPartOfAccountOpeningForGettingAnAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningForIDVerification")
    public Boolean creditScoringPartOfAccountOpeningForIDVerification;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditScoringPartOfAccountOpeningForIdVerification(Boolean creditScoringPartOfAccountOpeningForIDVerification) {
        this.creditScoringPartOfAccountOpeningForIDVerification = creditScoringPartOfAccountOpeningForIDVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore) {
        this.creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore = creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningIDVerificationText")
    public String[] creditScoringPartOfAccountOpeningIDVerificationText;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditScoringPartOfAccountOpeningIdVerificationText(String[] creditScoringPartOfAccountOpeningIDVerificationText) {
        this.creditScoringPartOfAccountOpeningIDVerificationText = creditScoringPartOfAccountOpeningIDVerificationText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[] creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore) {
        this.creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore = creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditScoringPartOfAccountOpeningText")
    public String creditScoringPartOfAccountOpeningText;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCreditScoringPartOfAccountOpeningText(String creditScoringPartOfAccountOpeningText) {
        this.creditScoringPartOfAccountOpeningText = creditScoringPartOfAccountOpeningText;
        return this;
    }
    @JsonProperty("Currency")
    public String[] currency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCurrency(String[] currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("Eligibility")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility eligibility;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withEligibility(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility eligibility) {
        this.eligibility = eligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Feature")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature[] feature;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withFeature(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature[] feature) {
        this.feature = feature;
        return this;
    }
    @JsonProperty("FeesAndCharges")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[] feesAndCharges;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withFeesAndCharges(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonProperty("InternationalPaymentsSupported")
    public Boolean internationalPaymentsSupported;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withInternationalPaymentsSupported(Boolean internationalPaymentsSupported) {
        this.internationalPaymentsSupported = internationalPaymentsSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumMonthlyCharge")
    public String maximumMonthlyCharge;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withMaximumMonthlyCharge(String maximumMonthlyCharge) {
        this.maximumMonthlyCharge = maximumMonthlyCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobileWallet")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum[] mobileWallet;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withMobileWallet(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum[] mobileWallet) {
        this.mobileWallet = mobileWallet;
        return this;
    }
    @JsonProperty("Organisation")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation organisation;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withOrganisation(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation organisation) {
        this.organisation = organisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Overdraft")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft[] overdraft;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withOverdraft(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft[] overdraft) {
        this.overdraft = overdraft;
        return this;
    }
    @JsonProperty("OverdraftOffered")
    public Boolean overdraftOffered;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withOverdraftOffered(Boolean overdraftOffered) {
        this.overdraftOffered = overdraftOffered;
        return this;
    }
    @JsonProperty("ProductDescription")
    public String productDescription;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @JsonProperty("ProductIdentifier")
    public String productIdentifier;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductIdentifier(String productIdentifier) {
        this.productIdentifier = productIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductName")
    public String productName;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonProperty("ProductSegment")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[] productSegment;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductSegment(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[] productSegment) {
        this.productSegment = productSegment;
        return this;
    }
    @JsonProperty("ProductType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum productType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonProperty("ProductURL")
    public String[] productURL;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductUrl(String[] productURL) {
        this.productURL = productURL;
        return this;
    }
    @JsonProperty("TsandCs")
    public String[] tsandCs;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData withTsandCs(String[] tsandCs) {
        this.tsandCs = tsandCs;
        return this;
    }
}