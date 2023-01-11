package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPaymentsResponseV4
 * List Payments Response Object
**/
public class ListPaymentsResponseV4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentResponseV4[] content;
    public ListPaymentsResponseV4 withContent(PaymentResponseV4[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListPaymentsResponseV4 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListPaymentsResponseV4 withPage(Object page) {
        this.page = page;
        return this;
    }
}