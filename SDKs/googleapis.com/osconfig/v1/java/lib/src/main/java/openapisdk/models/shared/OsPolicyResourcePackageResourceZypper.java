package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResourceZypper
 * A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
**/
public class OsPolicyResourcePackageResourceZypper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyResourcePackageResourceZypper withName(String name) {
        this.name = name;
        return this;
    }
}