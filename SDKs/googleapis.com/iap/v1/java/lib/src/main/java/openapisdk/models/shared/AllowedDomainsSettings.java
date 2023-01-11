package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllowedDomainsSettings
 * Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
**/
public class AllowedDomainsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public AllowedDomainsSettings withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AllowedDomainsSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}