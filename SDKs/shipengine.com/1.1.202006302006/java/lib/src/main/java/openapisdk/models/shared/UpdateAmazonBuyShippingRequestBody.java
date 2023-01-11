package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAmazonBuyShippingRequestBody
 * An amazon buy shipping account settings request body
**/
public class UpdateAmazonBuyShippingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpdateAmazonBuyShippingRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
}