package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteVerificationWebResourceResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SiteVerificationWebResourceResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owners")
    public String[] owners;
    public SiteVerificationWebResourceResource withOwners(String[] owners) {
        this.owners = owners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public SiteVerificationWebResourceResourceSite site;
    public SiteVerificationWebResourceResource withSite(SiteVerificationWebResourceResourceSite site) {
        this.site = site;
        return this;
    }
}