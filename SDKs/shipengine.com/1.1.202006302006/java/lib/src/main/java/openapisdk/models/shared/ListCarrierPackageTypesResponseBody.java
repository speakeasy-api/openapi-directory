package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCarrierPackageTypesResponseBody
 * A list carrier package types response body
**/
public class ListCarrierPackageTypesResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public ListCarrierPackageTypesResponseBodyPackageType[] packages;
    public ListCarrierPackageTypesResponseBody withPackages(ListCarrierPackageTypesResponseBodyPackageType[] packages) {
        this.packages = packages;
        return this;
    }
}