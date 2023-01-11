package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObReadDataBalance1 {
    @JsonProperty("Balance")
    public ObCashBalance1[] balance;
    public ObReadDataBalance1 withBalance(ObCashBalance1[] balance) {
        this.balance = balance;
        return this;
    }
}