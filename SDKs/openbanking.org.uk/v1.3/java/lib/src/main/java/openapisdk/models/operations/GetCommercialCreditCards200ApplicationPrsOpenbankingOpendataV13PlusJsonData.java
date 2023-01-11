package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData
 * Commercial Credit Card
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData {
    @JsonProperty("Benefits")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits benefits;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withBenefits(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Details")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails details;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withDetails(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("Eligibility")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility eligibility;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withEligibility(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility eligibility) {
        this.eligibility = eligibility;
        return this;
    }
    @JsonProperty("KeyFeatures")
    public String keyFeatures;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withKeyFeatures(String keyFeatures) {
        this.keyFeatures = keyFeatures;
        return this;
    }
    @JsonProperty("Organisation")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation organisation;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withOrganisation(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation organisation) {
        this.organisation = organisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OtherKeyFeatures")
    public String otherKeyFeatures;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withOtherKeyFeatures(String otherKeyFeatures) {
        this.otherKeyFeatures = otherKeyFeatures;
        return this;
    }
    @JsonProperty("PaymentHoliday")
    public Boolean paymentHoliday;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withPaymentHoliday(Boolean paymentHoliday) {
        this.paymentHoliday = paymentHoliday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentHolidayDescription")
    public String paymentHolidayDescription;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withPaymentHolidayDescription(String paymentHolidayDescription) {
        this.paymentHolidayDescription = paymentHolidayDescription;
        return this;
    }
    @JsonProperty("ProductIdentifier")
    public String productIdentifier;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductIdentifier(String productIdentifier) {
        this.productIdentifier = productIdentifier;
        return this;
    }
    @JsonProperty("ProductName")
    public String productName;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductSegment")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[] productSegment;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductSegment(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[] productSegment) {
        this.productSegment = productSegment;
        return this;
    }
    @JsonProperty("ProductType")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum productType;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductType(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonProperty("ProductURL")
    public String[] productURL;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withProductUrl(String[] productURL) {
        this.productURL = productURL;
        return this;
    }
    @JsonProperty("TsandCs")
    public String[] tsandCs;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData withTsandCs(String[] tsandCs) {
        this.tsandCs = tsandCs;
        return this;
    }
}