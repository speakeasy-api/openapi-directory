package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartCustomNumberFormatOptions
 * Custom number formatting options for chart attributes.
**/
public class ChartCustomNumberFormatOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public ChartCustomNumberFormatOptions withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public ChartCustomNumberFormatOptions withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}