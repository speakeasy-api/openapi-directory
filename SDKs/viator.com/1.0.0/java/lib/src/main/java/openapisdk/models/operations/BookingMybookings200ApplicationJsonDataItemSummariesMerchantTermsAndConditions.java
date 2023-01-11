package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountRefundable")
    public String amountRefundable;
    public BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withAmountRefundable(String amountRefundable) {
        this.amountRefundable = amountRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFromTourDate")
    public BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate;
    public BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withCancellationFromTourDate(BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[] cancellationFromTourDate) {
        this.cancellationFromTourDate = cancellationFromTourDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
}