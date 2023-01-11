package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePackageTypeRequestBody
 * A package type that a carrier supports for shipment.
**/
public class CreatePackageTypeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreatePackageTypeRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public CreatePackageTypeRequestBody withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreatePackageTypeRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("package_code")
    public String packageCode;
    public CreatePackageTypeRequestBody withPackageCode(String packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_id")
    public String packageId;
    public CreatePackageTypeRequestBody withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}