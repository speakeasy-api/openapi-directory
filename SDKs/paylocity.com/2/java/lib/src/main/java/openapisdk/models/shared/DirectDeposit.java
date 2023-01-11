package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectDeposit
 * The Direct Deposit model
**/
public class DirectDeposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalDirectDeposit")
    public DirectDepositAdditionalDirectDeposit[] additionalDirectDeposit;
    public DirectDeposit withAdditionalDirectDeposit(DirectDepositAdditionalDirectDeposit[] additionalDirectDeposit) {
        this.additionalDirectDeposit = additionalDirectDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainDirectDeposit")
    public DirectDepositMainDirectDeposit mainDirectDeposit;
    public DirectDeposit withMainDirectDeposit(DirectDepositMainDirectDeposit mainDirectDeposit) {
        this.mainDirectDeposit = mainDirectDeposit;
        return this;
    }
}