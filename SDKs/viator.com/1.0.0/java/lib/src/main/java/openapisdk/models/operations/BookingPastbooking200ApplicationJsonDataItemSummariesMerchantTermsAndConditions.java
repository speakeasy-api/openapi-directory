package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountRefundable")
    public String amountRefundable;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withAmountRefundable(String amountRefundable) {
        this.amountRefundable = amountRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFromTourDate")
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withCancellationFromTourDate(BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate) {
        this.cancellationFromTourDate = cancellationFromTourDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
}