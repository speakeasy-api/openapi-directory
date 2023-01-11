package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Amount
 * Describes the amount unit including the currency code.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Amount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountMicros")
    public String amountMicros;
    public GoogleCloudPaymentsResellerSubscriptionV1Amount withAmountMicros(String amountMicros) {
        this.amountMicros = amountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleCloudPaymentsResellerSubscriptionV1Amount withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
}