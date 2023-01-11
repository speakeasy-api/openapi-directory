package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarrierByIdResponseBodyPackageType
 * A package type that a carrier supports for shipment.
**/
public class GetCarrierByIdResponseBodyPackageType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetCarrierByIdResponseBodyPackageType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public GetCarrierByIdResponseBodyPackageType withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetCarrierByIdResponseBodyPackageType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("package_code")
    public String packageCode;
    public GetCarrierByIdResponseBodyPackageType withPackageCode(String packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_id")
    public String packageId;
    public GetCarrierByIdResponseBodyPackageType withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}