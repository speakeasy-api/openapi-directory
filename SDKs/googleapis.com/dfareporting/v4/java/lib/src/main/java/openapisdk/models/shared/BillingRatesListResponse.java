package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingRatesListResponse
 * Billing Rate List Response
**/
public class BillingRatesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingRates")
    public BillingRate[] billingRates;
    public BillingRatesListResponse withBillingRates(BillingRate[] billingRates) {
        this.billingRates = billingRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BillingRatesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public BillingRatesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}