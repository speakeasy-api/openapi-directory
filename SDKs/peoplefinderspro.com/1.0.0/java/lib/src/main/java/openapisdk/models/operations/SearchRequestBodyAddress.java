package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchRequestBodyAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine1")
    public String addressLine1;
    public SearchRequestBodyAddress withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine2")
    public String addressLine2;
    public SearchRequestBodyAddress withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
}