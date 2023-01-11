package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResourceDeb
 * A deb package file. dpkg packages only support INSTALLED state.
**/
public class OsPolicyResourcePackageResourceDeb {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullDeps")
    public Boolean pullDeps;
    public OsPolicyResourcePackageResourceDeb withPullDeps(Boolean pullDeps) {
        this.pullDeps = pullDeps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public OsPolicyResourceFile source;
    public OsPolicyResourcePackageResourceDeb withSource(OsPolicyResourceFile source) {
        this.source = source;
        return this;
    }
}