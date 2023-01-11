package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DownloadParameters
 * # gdata.* are outside protos with mising documentation
**/
public class DownloadParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowGzipCompression")
    public Boolean allowGzipCompression;
    public DownloadParameters withAllowGzipCompression(Boolean allowGzipCompression) {
        this.allowGzipCompression = allowGzipCompression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreRange")
    public Boolean ignoreRange;
    public DownloadParameters withIgnoreRange(Boolean ignoreRange) {
        this.ignoreRange = ignoreRange;
        return this;
    }
}