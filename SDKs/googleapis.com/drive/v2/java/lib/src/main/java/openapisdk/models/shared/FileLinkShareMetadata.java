package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileLinkShareMetadata
 * Contains details about the link URLs that clients are using to refer to this item.
**/
public class FileLinkShareMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityUpdateEligible")
    public Boolean securityUpdateEligible;
    public FileLinkShareMetadata withSecurityUpdateEligible(Boolean securityUpdateEligible) {
        this.securityUpdateEligible = securityUpdateEligible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityUpdateEnabled")
    public Boolean securityUpdateEnabled;
    public FileLinkShareMetadata withSecurityUpdateEnabled(Boolean securityUpdateEnabled) {
        this.securityUpdateEnabled = securityUpdateEnabled;
        return this;
    }
}