package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedPayeeInvitationStatusResponse2
 * List Payees Invitation Status Object
**/
public class PagedPayeeInvitationStatusResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PayeeInvitationStatusResponse2[] content;
    public PagedPayeeInvitationStatusResponse2 withContent(PayeeInvitationStatusResponse2[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PagedPayeeInvitationStatusResponse2 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PagedPayeeInvitationStatusResponse2 withPage(Object page) {
        this.page = page;
        return this;
    }
}