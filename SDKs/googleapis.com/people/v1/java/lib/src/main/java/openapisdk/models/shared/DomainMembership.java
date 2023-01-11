package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainMembership
 * A Google Workspace Domain membership.
**/
public class DomainMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inViewerDomain")
    public Boolean inViewerDomain;
    public DomainMembership withInViewerDomain(Boolean inViewerDomain) {
        this.inViewerDomain = inViewerDomain;
        return this;
    }
}