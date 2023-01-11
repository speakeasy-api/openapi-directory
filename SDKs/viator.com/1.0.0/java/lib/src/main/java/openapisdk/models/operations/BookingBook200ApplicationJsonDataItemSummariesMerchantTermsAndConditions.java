package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountRefundable")
    public String amountRefundable;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withAmountRefundable(String amountRefundable) {
        this.amountRefundable = amountRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFromTourDate")
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withCancellationFromTourDate(BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate) {
        this.cancellationFromTourDate = cancellationFromTourDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
}