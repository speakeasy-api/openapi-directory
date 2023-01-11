package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextToColumnsRequest
 * Splits a column of text into multiple columns, based on a delimiter in each cell.
**/
public class TextToColumnsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delimiter")
    public String delimiter;
    public TextToColumnsRequest withDelimiter(String delimiter) {
        this.delimiter = delimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delimiterType")
    public TextToColumnsRequestDelimiterTypeEnum delimiterType;
    public TextToColumnsRequest withDelimiterType(TextToColumnsRequestDelimiterTypeEnum delimiterType) {
        this.delimiterType = delimiterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GridRange source;
    public TextToColumnsRequest withSource(GridRange source) {
        this.source = source;
        return this;
    }
}