package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EffectiveGuestPolicySourcedPackage
 * A guest policy package including its source.
**/
public class EffectiveGuestPolicySourcedPackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package")
    public Package package_;
    public EffectiveGuestPolicySourcedPackage withPackage(Package package_) {
        this.package_ = package_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public EffectiveGuestPolicySourcedPackage withSource(String source) {
        this.source = source;
        return this;
    }
}