package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResourceRpm
 * An RPM package file. RPM packages only support INSTALLED state.
**/
public class OsPolicyResourcePackageResourceRpm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullDeps")
    public Boolean pullDeps;
    public OsPolicyResourcePackageResourceRpm withPullDeps(Boolean pullDeps) {
        this.pullDeps = pullDeps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public OsPolicyResourceFile source;
    public OsPolicyResourcePackageResourceRpm withSource(OsPolicyResourceFile source) {
        this.source = source;
        return this;
    }
}