package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedPayeeInvitationStatusResponse
 * List Payees Invitation Status Object
**/
public class PagedPayeeInvitationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PayeeInvitationStatusResponse[] content;
    public PagedPayeeInvitationStatusResponse withContent(PayeeInvitationStatusResponse[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PagedPayeeInvitationStatusResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PagedPayeeInvitationStatusResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}