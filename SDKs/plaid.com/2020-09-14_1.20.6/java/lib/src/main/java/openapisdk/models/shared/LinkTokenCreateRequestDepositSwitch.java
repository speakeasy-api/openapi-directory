package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinkTokenCreateRequestDepositSwitch
 * Specifies options for initializing Link for use with the Deposit Switch (beta) product. This field is required if `deposit_switch` is included in the `products` array.
**/
public class LinkTokenCreateRequestDepositSwitch {
    @JsonProperty("deposit_switch_id")
    public String depositSwitchId;
    public LinkTokenCreateRequestDepositSwitch withDepositSwitchId(String depositSwitchId) {
        this.depositSwitchId = depositSwitchId;
        return this;
    }
}