package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextFormatRun
 * A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
**/
public class TextFormatRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public TextFormat format;
    public TextFormatRun withFormat(TextFormat format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public TextFormatRun withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}