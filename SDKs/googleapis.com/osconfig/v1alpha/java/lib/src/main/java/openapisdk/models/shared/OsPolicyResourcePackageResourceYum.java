package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResourceYum
 * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
**/
public class OsPolicyResourcePackageResourceYum {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyResourcePackageResourceYum withName(String name) {
        this.name = name;
        return this;
    }
}