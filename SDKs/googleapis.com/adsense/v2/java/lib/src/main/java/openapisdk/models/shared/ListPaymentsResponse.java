package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPaymentsResponse
 * Response definition for the payments list rpc.
**/
public class ListPaymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public Payment[] payments;
    public ListPaymentsResponse withPayments(Payment[] payments) {
        this.payments = payments;
        return this;
    }
}