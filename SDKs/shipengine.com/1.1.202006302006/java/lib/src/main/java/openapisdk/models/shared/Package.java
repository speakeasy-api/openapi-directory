package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Package
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
public class Package {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public Package withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_package_id")
    public String externalPackageId;
    public Package withExternalPackageId(String externalPackageId) {
        this.externalPackageId = externalPackageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insured_value")
    public PackageMonetaryValue insuredValue;
    public Package withInsuredValue(PackageMonetaryValue insuredValue) {
        this.insuredValue = insuredValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_messages")
    public LabelMessages labelMessages;
    public Package withLabelMessages(LabelMessages labelMessages) {
        this.labelMessages = labelMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_code")
    public String packageCode;
    public Package withPackageCode(String packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_number")
    public java.util.Map<String, Object> trackingNumber;
    public Package withTrackingNumber(java.util.Map<String, Object> trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @JsonProperty("weight")
    public Weight weight;
    public Package withWeight(Weight weight) {
        this.weight = weight;
        return this;
    }
}