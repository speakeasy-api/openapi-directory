package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * McfDataRows
 * A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
**/
public class McfDataRows {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionPathValue")
    public McfDataRowsConversionPathValue[] conversionPathValue;
    public McfDataRows withConversionPathValue(McfDataRowsConversionPathValue[] conversionPathValue) {
        this.conversionPathValue = conversionPathValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primitiveValue")
    public String primitiveValue;
    public McfDataRows withPrimitiveValue(String primitiveValue) {
        this.primitiveValue = primitiveValue;
        return this;
    }
}