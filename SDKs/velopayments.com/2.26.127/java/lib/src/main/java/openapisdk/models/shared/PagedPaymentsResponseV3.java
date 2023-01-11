package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedPaymentsResponseV3
 * List Payees Response Object
**/
public class PagedPaymentsResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentV3[] content;
    public PagedPaymentsResponseV3 withContent(PaymentV3[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PagedPaymentsResponseV3 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PagedPaymentsResponseV3 withPage(Object page) {
        this.page = page;
        return this;
    }
}