package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPaymentsResponseV3
 * List Payments Response Object
**/
public class ListPaymentsResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentResponseV3[] content;
    public ListPaymentsResponseV3 withContent(PaymentResponseV3[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListPaymentsResponseV3 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListPaymentsResponseV3 withPage(Object page) {
        this.page = page;
        return this;
    }
}