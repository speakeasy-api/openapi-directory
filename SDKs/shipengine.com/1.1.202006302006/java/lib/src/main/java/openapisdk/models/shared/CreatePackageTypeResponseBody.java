package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePackageTypeResponseBody
 * A package type that a carrier supports for shipment.
**/
public class CreatePackageTypeResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreatePackageTypeResponseBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public CreatePackageTypeResponseBody withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreatePackageTypeResponseBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("package_code")
    public String packageCode;
    public CreatePackageTypeResponseBody withPackageCode(String packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_id")
    public String packageId;
    public CreatePackageTypeResponseBody withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}