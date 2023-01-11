package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PackageInput
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
public class PackageInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public PackageInput withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_package_id")
    public String externalPackageId;
    public PackageInput withExternalPackageId(String externalPackageId) {
        this.externalPackageId = externalPackageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insured_value")
    public PackageMonetaryValue insuredValue;
    public PackageInput withInsuredValue(PackageMonetaryValue insuredValue) {
        this.insuredValue = insuredValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_messages")
    public LabelMessages labelMessages;
    public PackageInput withLabelMessages(LabelMessages labelMessages) {
        this.labelMessages = labelMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_code")
    public String packageCode;
    public PackageInput withPackageCode(String packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonProperty("weight")
    public Weight weight;
    public PackageInput withWeight(Weight weight) {
        this.weight = weight;
        return this;
    }
}