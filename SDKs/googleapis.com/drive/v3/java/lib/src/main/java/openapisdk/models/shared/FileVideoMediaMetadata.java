package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileVideoMediaMetadata
 * Additional metadata about video media. This may not be available immediately upon upload.
**/
public class FileVideoMediaMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMillis")
    public String durationMillis;
    public FileVideoMediaMetadata withDurationMillis(String durationMillis) {
        this.durationMillis = durationMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public FileVideoMediaMetadata withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public FileVideoMediaMetadata withWidth(Integer width) {
        this.width = width;
        return this;
    }
}