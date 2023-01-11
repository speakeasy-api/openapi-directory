package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditResp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public AuditRespEmbedded embedded;
    public AuditResp withEmbedded(AuditRespEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public PaginationLinks links;
    public AuditResp withLinks(PaginationLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public PaginationData page;
    public AuditResp withPage(PaginationData page) {
        this.page = page;
        return this;
    }
}