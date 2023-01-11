package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResourceMsi
 * An MSI package. MSI packages only support INSTALLED state.
**/
public class OsPolicyResourcePackageResourceMsi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public String[] properties;
    public OsPolicyResourcePackageResourceMsi withProperties(String[] properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public OsPolicyResourceFile source;
    public OsPolicyResourcePackageResourceMsi withSource(OsPolicyResourceFile source) {
        this.source = source;
        return this;
    }
}