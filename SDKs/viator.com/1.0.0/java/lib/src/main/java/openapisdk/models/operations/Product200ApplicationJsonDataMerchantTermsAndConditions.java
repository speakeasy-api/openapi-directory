package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataMerchantTermsAndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountRefundable")
    public Long amountRefundable;
    public Product200ApplicationJsonDataMerchantTermsAndConditions withAmountRefundable(Long amountRefundable) {
        this.amountRefundable = amountRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFromTourDate")
    public Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate;
    public Product200ApplicationJsonDataMerchantTermsAndConditions withCancellationFromTourDate(Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate) {
        this.cancellationFromTourDate = cancellationFromTourDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantTermsAndConditionsType")
    public Long merchantTermsAndConditionsType;
    public Product200ApplicationJsonDataMerchantTermsAndConditions withMerchantTermsAndConditionsType(Long merchantTermsAndConditionsType) {
        this.merchantTermsAndConditionsType = merchantTermsAndConditionsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public Product200ApplicationJsonDataMerchantTermsAndConditions withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
}