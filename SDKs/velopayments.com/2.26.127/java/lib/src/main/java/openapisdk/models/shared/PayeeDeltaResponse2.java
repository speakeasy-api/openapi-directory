package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayeeDeltaResponse2
 * List Payee Changes Response Object
**/
public class PayeeDeltaResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PayeeDelta2[] content;
    public PayeeDeltaResponse2 withContent(PayeeDelta2[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PayeeDeltaResponse2 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PayeeDeltaResponse2 withPage(Object page) {
        this.page = page;
        return this;
    }
}