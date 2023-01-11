package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AgentSiteId {
    @JsonProperty("site_id")
    public String siteId;
    public AgentSiteId withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}