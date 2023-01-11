package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayorLinksResponse
 * List Payor Links Response Object
**/
public class PayorLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PayorLinksResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payors")
    public Object[] payors;
    public PayorLinksResponse withPayors(Object[] payors) {
        this.payors = payors;
        return this;
    }
}