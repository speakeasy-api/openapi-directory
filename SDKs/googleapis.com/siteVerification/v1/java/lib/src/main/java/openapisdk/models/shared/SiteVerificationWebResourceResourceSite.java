package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteVerificationWebResourceResourceSite
 * The address and type of a site that is verified or will be verified.
**/
public class SiteVerificationWebResourceResourceSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public SiteVerificationWebResourceResourceSite withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SiteVerificationWebResourceResourceSite withType(String type) {
        this.type = type;
        return this;
    }
}