package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionStatus
 * The original conversion that was inserted or updated and whether there were any errors.
**/
public class ConversionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion")
    public Conversion conversion;
    public ConversionStatus withConversion(Conversion conversion) {
        this.conversion = conversion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ConversionError[] errors;
    public ConversionStatus withErrors(ConversionError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionStatus withKind(String kind) {
        this.kind = kind;
        return this;
    }
}