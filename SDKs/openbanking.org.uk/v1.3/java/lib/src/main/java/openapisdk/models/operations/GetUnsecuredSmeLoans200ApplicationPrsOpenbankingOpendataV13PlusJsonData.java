package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData
 * SME Loan
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArrearsTreatment")
    public String arrearsTreatment;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withArrearsTreatment(String arrearsTreatment) {
        this.arrearsTreatment = arrearsTreatment;
        return this;
    }
    @JsonProperty("Benefits")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits benefits;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withBenefits(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonProperty("Currency")
    public String[] currency;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCurrency(String[] currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("CustomerAccessChannels")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum[] customerAccessChannels;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withCustomerAccessChannels(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum[] customerAccessChannels) {
        this.customerAccessChannels = customerAccessChannels;
        return this;
    }
    @JsonProperty("Eligibility")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility eligibility;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withEligibility(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility eligibility) {
        this.eligibility = eligibility;
        return this;
    }
    @JsonProperty("FeesAndCharges")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[] feesAndCharges;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withFeesAndCharges(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonProperty("LoanItem")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem[] loanItem;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withLoanItem(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem[] loanItem) {
        this.loanItem = loanItem;
        return this;
    }
    @JsonProperty("MaximumLoanAmount")
    public String maximumLoanAmount;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withMaximumLoanAmount(String maximumLoanAmount) {
        this.maximumLoanAmount = maximumLoanAmount;
        return this;
    }
    @JsonProperty("MaximumLoanTerm")
    public Long maximumLoanTerm;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withMaximumLoanTerm(Long maximumLoanTerm) {
        this.maximumLoanTerm = maximumLoanTerm;
        return this;
    }
    @JsonProperty("MinimumLoanAmount")
    public String minimumLoanAmount;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withMinimumLoanAmount(String minimumLoanAmount) {
        this.minimumLoanAmount = minimumLoanAmount;
        return this;
    }
    @JsonProperty("MinimumLoanTerm")
    public Long minimumLoanTerm;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withMinimumLoanTerm(Long minimumLoanTerm) {
        this.minimumLoanTerm = minimumLoanTerm;
        return this;
    }
    @JsonProperty("Organisation")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation organisation;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withOrganisation(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation organisation) {
        this.organisation = organisation;
        return this;
    }
    @JsonProperty("PaymentHoliday")
    public Boolean paymentHoliday;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withPaymentHoliday(Boolean paymentHoliday) {
        this.paymentHoliday = paymentHoliday;
        return this;
    }
    @JsonProperty("ProductDescription")
    public String productDescription;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @JsonProperty("ProductIdentifier")
    public String productIdentifier;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductIdentifier(String productIdentifier) {
        this.productIdentifier = productIdentifier;
        return this;
    }
    @JsonProperty("ProductName")
    public String productName;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonProperty("ProductSegment")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[] productSegment;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductSegment(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[] productSegment) {
        this.productSegment = productSegment;
        return this;
    }
    @JsonProperty("ProductTypeName")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum productTypeName;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductTypeName(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum productTypeName) {
        this.productTypeName = productTypeName;
        return this;
    }
    @JsonProperty("ProductURL")
    public String[] productURL;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductUrl(String[] productURL) {
        this.productURL = productURL;
        return this;
    }
    @JsonProperty("TsandCs")
    public String[] tsandCs;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData withTsandCs(String[] tsandCs) {
        this.tsandCs = tsandCs;
        return this;
    }
}