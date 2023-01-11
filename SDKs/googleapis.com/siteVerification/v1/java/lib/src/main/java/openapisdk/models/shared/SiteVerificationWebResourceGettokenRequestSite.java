package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteVerificationWebResourceGettokenRequestSite
 * The site for which a verification token will be generated.
**/
public class SiteVerificationWebResourceGettokenRequestSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public SiteVerificationWebResourceGettokenRequestSite withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SiteVerificationWebResourceGettokenRequestSite withType(String type) {
        this.type = type;
        return this;
    }
}