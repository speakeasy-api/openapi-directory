package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionList
 * A list of conversions.
**/
public class ConversionList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion")
    public Conversion[] conversion;
    public ConversionList withConversion(Conversion[] conversion) {
        this.conversion = conversion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}