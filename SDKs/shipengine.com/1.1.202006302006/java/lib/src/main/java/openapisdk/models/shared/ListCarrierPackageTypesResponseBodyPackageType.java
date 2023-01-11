package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCarrierPackageTypesResponseBodyPackageType
 * A package type that a carrier supports for shipment.
**/
public class ListCarrierPackageTypesResponseBodyPackageType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ListCarrierPackageTypesResponseBodyPackageType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public ListCarrierPackageTypesResponseBodyPackageType withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListCarrierPackageTypesResponseBodyPackageType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("package_code")
    public String packageCode;
    public ListCarrierPackageTypesResponseBodyPackageType withPackageCode(String packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_id")
    public String packageId;
    public ListCarrierPackageTypesResponseBodyPackageType withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}