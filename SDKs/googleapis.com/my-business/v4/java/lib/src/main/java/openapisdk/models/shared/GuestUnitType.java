package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestUnitType
 * A specific type of unit primarily defined by its features.
**/
public class GuestUnitType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codes")
    public String[] codes;
    public GuestUnitType withCodes(String[] codes) {
        this.codes = codes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GuestUnitFeatures features;
    public GuestUnitType withFeatures(GuestUnitFeatures features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public GuestUnitType withLabel(String label) {
        this.label = label;
        return this;
    }
}