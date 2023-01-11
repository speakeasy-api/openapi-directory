package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPackageTypesResponseBody
 * A list package types response body
**/
public class ListPackageTypesResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public ListPackageTypesResponseBodyPackageType[] packages;
    public ListPackageTypesResponseBody withPackages(ListPackageTypesResponseBodyPackageType[] packages) {
        this.packages = packages;
        return this;
    }
}