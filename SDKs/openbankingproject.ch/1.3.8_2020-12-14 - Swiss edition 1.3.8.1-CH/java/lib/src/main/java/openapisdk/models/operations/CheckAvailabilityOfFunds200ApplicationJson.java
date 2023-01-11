package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CheckAvailabilityOfFunds200ApplicationJson
 * Equals "true" if sufficient funds are available at the time of the request,
 * "false" otherwise.
 * 
**/
public class CheckAvailabilityOfFunds200ApplicationJson {
    @JsonProperty("fundsAvailable")
    public Boolean fundsAvailable;
    public CheckAvailabilityOfFunds200ApplicationJson withFundsAvailable(Boolean fundsAvailable) {
        this.fundsAvailable = fundsAvailable;
        return this;
    }
}