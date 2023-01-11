package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResourceGooGet
 * A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
**/
public class OsPolicyResourcePackageResourceGooGet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyResourcePackageResourceGooGet withName(String name) {
        this.name = name;
        return this;
    }
}