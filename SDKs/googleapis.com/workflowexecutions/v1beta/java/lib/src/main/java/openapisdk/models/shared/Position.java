package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Position
 * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
**/
public class Position {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public String column;
    public Position withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public Position withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public String line;
    public Position withLine(String line) {
        this.line = line;
        return this;
    }
}